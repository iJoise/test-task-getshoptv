import React, {useState} from "react";
import s from "./PromoSidebar.module.scss";
import {InputPhone} from "../InputPhone/InputPhone";
import {Buttons} from "../Buttons/Buttons";
import {Checkbox} from "../Checkbox/Checkbox";


export const PromoSidebar: React.FC = () => {
   const [phone, setPhone] = useState('');
   const [checked, setChecked] = useState(false);

   const validatePhoneHandler = () => {

   }

   const disabledConfirmBtn = !checked && phone.length !== 10;
   const confirmBtnClass = checked && phone.length === 10
      ? `${s.confirm_btn} ${s.enabled}`
      : `${s.confirm_btn}`

   return (
      <div className={s.sidebar}>
         <h2>Введите ваш номер мобильного телефона</h2>
         <InputPhone phone={phone}/>
         <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
         <div className={s.sidebar__row}>
            <Buttons setPhone={setPhone} phone={phone}/>
            <div className={s.sidebar__bottom}>
               <div className={s.checkbox_box}>
                  <Checkbox
                     setChecked={setChecked}
                     checked={checked}
                  >Согласие на обработку персональных данных</Checkbox>
               </div>
               <button
                  disabled={disabledConfirmBtn}
                  className={confirmBtnClass}
                  onClick={validatePhoneHandler}
               >ПОДТВЕРДИТЬ НОМЕР
               </button>
            </div>
         </div>
      </div>
   )
}