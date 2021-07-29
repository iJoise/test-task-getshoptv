import {applyMiddleware, combineReducers, createStore} from "redux";
import {AppActionType, appReducer} from "./app-reducer";
import thunk, {ThunkAction} from "redux-thunk";

const rootReducer = combineReducers({
   app: appReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionType>

