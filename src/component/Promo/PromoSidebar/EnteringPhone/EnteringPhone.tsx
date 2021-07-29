import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {validatePhoneNumber} from "../../../../state/app-reducer";
import s from "../PromoSidebar.module.scss";
import {InputPhone} from "../../../../features/InputPhone/InputPhone";
import {Buttons} from "../../../../features/Buttons/Buttons";
import {Checkbox} from "../../../../features/Checkbox/Checkbox";
import {AppRootStateType} from "../../../../state/store";

export const EnteringPhone: React.FC = React.memo(() => {
   const [phone, setPhone] = useState('');
   const [checked, setChecked] = useState(false);
   const error = useSelector<AppRootStateType, boolean>(state => state.app.error)
   const dispatch = useDispatch();

   const validatePhoneHandler = () => {
      dispatch(validatePhoneNumber(phone));
   }

   const disabledConfirmBtn = !checked || phone.length !== 10;
   const confirmBtnClass = checked && phone.length === 10
      ? `${s.confirm_btn} ${s.enabled}`
      : `${s.confirm_btn}`
   return (
      <>
         <h2>Введите ваш номер мобильного телефона</h2>
         <InputPhone phone={phone} error={error}/>
         <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
         <div className={s.sidebar__row}>
            <Buttons setPhone={setPhone} phone={phone} error={error}/>
            <div className={s.sidebar__bottom}>
               <div className={s.checkbox_box}>
                  {
                     error
                        ? <div className={s.error}>Неверно введён номер</div>
                        : <Checkbox
                           setChecked={setChecked}
                           checked={checked}
                        >Согласие на обработку персональных данных</Checkbox>
                  }
               </div>
               <button
                  disabled={disabledConfirmBtn}
                  className={confirmBtnClass}
                  onClick={validatePhoneHandler}
               >ПОДТВЕРДИТЬ НОМЕР
               </button>
            </div>
         </div>
      </>
   )
})

