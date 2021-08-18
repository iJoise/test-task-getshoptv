import {Action_Type, ActionType} from "./action";

export const initialState: StateType = {
   isFetching: false,
   isError: null,
   isAuth: false,
   userEmail: ''
}

export const loginReducer = (state: StateType, action: ActionType): StateType => {
   switch (action.type) {
      case Action_Type.SET_IS_FETCHING:
      case Action_Type.SET_IS_ERROR:
      case Action_Type.SET_USER_NAME:
      case Action_Type.SET_IS_AUTH:
         return {...state, ...action.payload};
      default:
         return state;
   }
}


export type StateType = {
   isFetching: boolean
   isError: string | null
   isAuth: boolean
   userEmail: string
}
