import React, {FC, KeyboardEvent, useCallback, useState} from "react";
import s from "./Buttons.module.scss";

type ButtonsPropsType = {
   setPhone: (value: string) => void
   phone: string
}

const phoneButtons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'clear', '0']

export const Buttons: FC<ButtonsPropsType> = React.memo(({setPhone, phone}) => {

   const [active, setActive] = useState('');
   const [animate, setAnimate] = useState(false);

   const onClickHandler = useCallback((btn: string) => {
      if (phone.length >= 10) {
         return;
      }
      setPhone(`${phone}${btn}`)
      setActive(btn)
   }, [phone, setPhone]);

   const clearInputHandler = useCallback((btn: string) => {
      const clear = phone.slice(0, -1);
      setPhone(clear);
      setActive(btn);
   }, [setPhone, phone]);

   const changeActiveClass = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
      let currentIndex = phoneButtons.indexOf(active)

      function setCurrentIndexAndActive(index: number) {
         currentIndex = index;
         setActive(phoneButtons[index]);
      }

      for (let i = 0; i < phoneButtons.length; i++) {
         if (e.key === 'ArrowLeft') {
            if (currentIndex === i) {
               setActive(phoneButtons[i - 1]);
            } else if (currentIndex === 0) {
               setActive(phoneButtons[phoneButtons.length - 1]);
            }
         }
         if (e.key === "ArrowRight") {
            if (currentIndex === i) {
               setActive(phoneButtons[i + 1]);
            } else if (currentIndex === phoneButtons.length - 1) {
               setCurrentIndexAndActive(0);
            }
         }
         if (e.key === 'ArrowDown') {
            if (currentIndex === i) {
               setActive(phoneButtons[i + 3]);
            } else if (currentIndex === 8) {
               setCurrentIndexAndActive(phoneButtons.length - 1);
               break;
            } else if (currentIndex === 7) {
               setCurrentIndexAndActive(9);
               break;
            } else if (currentIndex === 9 || currentIndex === 10) {
               setCurrentIndexAndActive(0)
            }
         }
         if (e.key === 'ArrowUp') {
            if (currentIndex === i) {
               setActive(phoneButtons[i - 3]);
            } else if (currentIndex === 2) {
               setCurrentIndexAndActive(phoneButtons.length - 1);
               break;
            } else if (currentIndex === 0 || currentIndex === 1) {
               setCurrentIndexAndActive(9);
               break;
            }
         }
      }
      if (e.key === 'Enter') {
         e.preventDefault();
         if (active !== 'clear') {
            if (phone.length > 10) {
               return;
            }
            onClickHandler(active)
         } else {
            clearInputHandler(active)
         }
         setAnimate(true)
      }
      if (e.key === 'Backspace') {
         clearInputHandler(active)
      }

   }, [active, phone, clearInputHandler, onClickHandler]);

   return (
      <div className={s.buttonBlock} onKeyDown={changeActiveClass} onKeyUp={() => setAnimate(false)}>
         {
            phoneButtons.map((btn, index) => {
               const activeClass = active === btn ? s.active : ''
               return btn === 'clear'
                  ? <button
                     key={index}
                     onClick={() => clearInputHandler(btn)}
                     className={`${s.btn} ${s.clear} ${animate && active === btn ? s.click : ''} ${activeClass}`}
                  >СТЕРЕТЬ</button>
                  : <button
                     autoFocus={btn === '1'}
                     key={index}
                     onClick={() => onClickHandler(btn)}
                     className={`${s.btn} ${animate && active === btn ? s.click : ''} ${activeClass}`}
                  >{btn}</button>
            })
         }
      </div>
   )
})
