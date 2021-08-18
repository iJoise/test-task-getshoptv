import React, {useCallback, useEffect, useReducer} from 'react';
import styled from "styled-components";
import {Redirect, Route} from "react-router-dom";
import {Login} from "./components/Login";
import {Profile} from "./components/Profile";
import {Title} from "./components/Title";
import {Flex} from "./components/common/Flex";
import {initialState, loginReducer} from "./reducer/reducer";
import {action} from "./reducer/action";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`

function App() {
   const [state, dispatch] = useReducer(loginReducer, initialState);

   useEffect(() => {
      const isAuth = localStorage.getItem('isAuth');
      const userEmail = localStorage.getItem('userEmail');
      if (isAuth && userEmail) {
         dispatch(action.setUserEmail(JSON.parse(userEmail)));
         dispatch(action.setIsAuth(JSON.parse(isAuth)));
      }
   }, []);


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

   return (
      <AppWrapper>
         <Flex justify={'center'}>
            <Title/>
         </Flex>
         <Route path={'/profile'} render={() =>
            <Profile
               userEmail={state.userEmail}
               setIsAuth={setIsAuth}
            />}
         />
         <Route path={'/login'} render={() =>
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
               ? <Redirect to='/profile'/>
               : <Redirect to='/login'/>
         }
      </AppWrapper>
   );
}

export default App;
