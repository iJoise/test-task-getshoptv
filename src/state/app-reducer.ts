enum ACTION_APP {
   SHOW_PROMO_PAGE = 'app/SHOW_PROMO_PAGE'
}

type InitialStateType = {
   showPromo: boolean
}

const initialState: InitialStateType = {
   showPromo: true,
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
   switch (action.type) {
      case ACTION_APP.SHOW_PROMO_PAGE:
         return {...state, showPromo: action.show}
      default:
         return state
   }
}

export const showPromoPage = (show: boolean) => ({type: ACTION_APP.SHOW_PROMO_PAGE, show} as const);
type ShowPromoPageActionType = ReturnType<typeof showPromoPage>


type AppActionType = ShowPromoPageActionType