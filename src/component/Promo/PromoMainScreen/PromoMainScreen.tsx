import React, {useCallback} from "react";
import {useDispatch} from "react-redux";
import {showPromoPage} from "../../../state/app-reducer";
import s from "./PromoMainScreen.module.scss";

export const PromoMainScreen: React.FC = () => {
   const dispatch = useDispatch();

   const hidePromoPageHandler = useCallback(() => {
      dispatch(showPromoPage(false))
   }, [dispatch]);


   return (
      <div className={s.close_promo}>
         <button onClick={hidePromoPageHandler} className={s.close_promo__btn}>&times;</button>
      </div>
   )
}