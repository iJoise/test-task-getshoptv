export enum Action_Type {
   SET_IS_FETCHING = 'only/login/SET_IS_FETCHING',
   SET_IS_ERROR = 'only/login/SET_IS_ERROR',
   SET_USER_NAME = 'only/login/SET_USER_NAME',
   SET_IS_AUTH = 'only/login/SET_IS_AUTH'
}

export const action = {
   setIsFetching: (isFetching: boolean) => ({type: Action_Type.SET_IS_FETCHING, payload: {isFetching}}),
   setIsError: (isError: string) => ({type: Action_Type.SET_IS_ERROR, payload: {isError}}),
   setUserEmail: (userEmail: string) => ({type: Action_Type.SET_USER_NAME, payload: {userEmail}}),
   setIsAuth: (isAuth: boolean) => ({type: Action_Type.SET_IS_AUTH, payload: {isAuth}})
}


type SetFetchingActionType = ReturnType<typeof action.setIsFetching>
type SetErrorActionType = ReturnType<typeof action.setIsError>
type SetUserNameActionType = ReturnType<typeof action.setUserEmail>
type SetIsAuthActionType = ReturnType<typeof action.setIsAuth>
export type ActionType = SetFetchingActionType
   | SetErrorActionType
   | SetUserNameActionType
   | SetIsAuthActionType