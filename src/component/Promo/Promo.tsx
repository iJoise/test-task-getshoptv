import React from "react";
import s from "./Promo.module.scss";
import {PromoMainScreen} from "./PromoMainScreen/PromoMainScreen";
import {PromoSidebar} from "./PromoSidebar/PromoSidebar";


export const Promo: React.FC = React.memo(() => {

   return (
      <div className={s.promo}>
         <PromoSidebar/>
         <PromoMainScreen/>
      </div>
   )
})

