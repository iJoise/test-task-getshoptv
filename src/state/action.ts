import {Action_Type} from "../constants";

export const action = {
   setIsFetching: (isFetching: boolean) => ({type: Action_Type.SET_IS_FETCHING, payload: {isFetching}}),
   setIsError: (isError: string) => ({type: Action_Type.SET_IS_ERROR, payload: {isError}}),
   setUserEmail: (userEmail: string) => ({type: Action_Type.SET_USER_NAME, payload: {userEmail}}),
   setIsAuth: (isAuth: boolean) => ({type: Action_Type.SET_IS_AUTH, payload: {isAuth}})
}
