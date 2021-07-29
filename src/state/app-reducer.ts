import {AppThunkType} from "./store";
import {validateApi} from "../api/validate-api";

enum ACTION_APP {
   SHOW_PROMO_PAGE = 'appReducer/SHOW_PROMO_PAGE',
   SET_VALID_NUMBER = 'appReducer/GET_VALID_NUMBER',
   SET_VALID_ERROR = 'appReducer/SET_VALID_ERROR'
}

type InitialStateType = {
   showPromo: boolean
   valid: boolean
   error: boolean
}

const initialState: InitialStateType = {
   showPromo: false,
   valid: false,
   error: false
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
   switch (action.type) {
      case ACTION_APP.SHOW_PROMO_PAGE:
      case ACTION_APP.SET_VALID_NUMBER:
      case ACTION_APP.SET_VALID_ERROR:
         return {...state, ...action.payload};
      default:
         return state;
   }
}

export const setIsShowPromoPage = (showPromo: boolean) =>
   ({type: ACTION_APP.SHOW_PROMO_PAGE, payload: {showPromo}} as const);
export const setIsValidatePhoneNumber = (valid: boolean) =>
   ({type: ACTION_APP.SET_VALID_NUMBER, payload: {valid}} as const);
export const setValidError = (error: boolean) =>
   ({type: ACTION_APP.SET_VALID_ERROR, payload: {error}} as const)

export const validatePhoneNumber = (phone: string): AppThunkType => async dispatch => {
   try {
      const res = await validateApi.checkPhone(phone)
      if (res.data.valid) {
         dispatch(setIsValidatePhoneNumber(true))
      } else {
         dispatch(setValidError(true))
      }
   } catch (err) {
      console.warn(err);
   }
}

type ShowPromoPageActionType = ReturnType<typeof setIsShowPromoPage>
type ValidatePhoneNumberActionType = ReturnType<typeof setIsValidatePhoneNumber>
type SetValidErrorActionType = ReturnType<typeof setValidError>
export type AppActionType =
   | ShowPromoPageActionType
   | ValidatePhoneNumberActionType
   | SetValidErrorActionType

