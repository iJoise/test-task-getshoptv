import React, {useState} from "react";
// import s from "./Promo.module.scss";
import {InputPhone} from "../InputPhone/InputPhone";
import {Buttons} from "../Buttons/Buttons";

// type PromoPropsType = {
//
// }


export const Promo: React.FC = () => {

   const [phone, setPhone] = useState('');

   return (
      <div>
         <InputPhone phone={phone}/>
         <Buttons setPhone={setPhone} phone={phone}/>
      </div>
   )
}
