import React from "react";
import s from "./PromoSidebar.module.scss";
import {EnteringPhone} from "./EnteringPhone/EnteringPhone";
import {VerifiedPhone} from "./VerifiedPhone/VerifiedPhone";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../state/store";


export const PromoSidebar: React.FC = React.memo(() => {

   const validPhoneNumber = useSelector<AppRootStateType, boolean>(state => state.app.valid )

   return (
      <div className={s.sidebar}>
         {
            !validPhoneNumber
            ? <EnteringPhone/>
            : <VerifiedPhone/>
         }
      </div>
   )
})

