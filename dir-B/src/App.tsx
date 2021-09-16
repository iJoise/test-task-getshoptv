import React, {useCallback, useEffect, useReducer} from 'react';
import styled from "styled-components";
import {Redirect, Route} from "react-router-dom";
import {Login} from "./components/Login";
import {Profile} from "./components/Profile";
import {Title} from "./components/Title";
import {Flex} from "./components/common/Flex";
import {initialState, loginReducer} from "./state/reducer";
import {action} from "./state/action";
import {Path} from "./constants";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`

export const App = () => {
   const [state, dispatch] = useReducer(loginReducer, initialState);

   const setErrorMessage = useCallback((error: string) => {
      dispatch(action.setIsError(error));
   }, []);
   const setIsFetching = useCallback((value: boolean) => {
      dispatch(action.setIsFetching(value));
   }, []);
   const setIsAuth = useCallback((value: boolean) => {
      dispatch(action.setIsAuth(value));
   }, []);
   const setUserEmail = useCallback((userEmail: string) => {
      dispatch(action.setUserEmail(userEmail));
   }, []);

   useEffect(() => {
      const isAuth = localStorage.getItem('isAuth');
      const userEmail = localStorage.getItem('userEmail');
      if (isAuth && userEmail) {
         dispatch(action.setUserEmail(JSON.parse(userEmail)));
         dispatch(action.setIsAuth(JSON.parse(isAuth)));
      }
   }, []);

   return (
      <AppWrapper>
         <Flex justify={'center'}>
            <Title/>
         </Flex>
         <Route path={Path.PROFILE} render={() =>
            <Profile
               userEmail={state.userEmail}
               setIsAuth={setIsAuth}
            />}
         />
         <Route path={Path.LOGIN} render={() =>
            <Login
               setErrorMessage={setErrorMessage}
               errorMessage={state.isError}
               setIsFetching={setIsFetching}
               isFetching={state.isFetching}
               setIsAuth={setIsAuth}
               setUserEmail={setUserEmail}
            />}
         />
         {
            state.isAuth
               ? <Redirect to={Path.PROFILE}/>
               : <Redirect to={Path.LOGIN}/>
         }
      </AppWrapper>
   );
}


