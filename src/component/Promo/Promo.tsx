import React, {useState} from "react";
import {InputPhone} from "./InputPhone/InputPhone";
import {Buttons} from "./Buttons/Buttons";
import s from "./Promo.module.scss";
import {Checkbox} from "./Checkbox/Checkbox";


export const Promo: React.FC = React.memo(() => {

   const [phone, setPhone] = useState('');

   return (
      <div className={s.promo}>
         <div className={s.sidebar}>
            <h2>Введите ваш номер мобильного телефона</h2>
            <InputPhone phone={phone}/>
            <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
            <div className={s.promo__row}>
               <Buttons setPhone={setPhone} phone={phone}/>
               <div className={s.promo__bottom}>
                  <div className={s.checkbox_box}>
                     <Checkbox>Согласие на обработку персональных данных</Checkbox>
                  </div>
                  <button className={s.confirm_btn}>ПОДТВЕРДИТЬ НОМЕР</button>
               </div>
            </div>
         </div>
         <div className={s.close_promo}>
            <button className={s.close_promo__btn}>&times;</button>
         </div>
      </div>
   )
})
