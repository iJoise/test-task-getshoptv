import {action} from "../action";

type SetFetchingActionType = ReturnType<typeof action.setIsFetching>
type SetErrorActionType = ReturnType<typeof action.setIsError>
type SetUserNameActionType = ReturnType<typeof action.setUserEmail>
type SetIsAuthActionType = ReturnType<typeof action.setIsAuth>

export type ActionType = SetFetchingActionType
   | SetErrorActionType
   | SetUserNameActionType
   | SetIsAuthActionType


export type StateType = {
   isFetching: boolean
   isError: string | null
   isAuth: boolean
   userEmail: string
}