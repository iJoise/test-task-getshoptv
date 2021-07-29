import React, {FC, KeyboardEvent, useCallback, useState} from "react";
import s from "./Buttons.module.scss";
import {useDispatch} from "react-redux";
import {setValidError} from "../../../state/app-reducer";

type ButtonsPropsType = {
   setPhone: (value: string) => void
   phone: string
   error: boolean
}

const phoneButtons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'clear', '0']

export const Buttons: FC<ButtonsPropsType> = React.memo(({setPhone, phone, error}) => {

   const [activeBtn, setActiveBtn] = useState('');
   const [animateBtn, setAnimateBtn] = useState(false);
   const dispatch = useDispatch();

   const onButtonClickHandler = useCallback((btn: string) => {
      if (phone.length >= 10) {
         return;
      }
      setPhone(`${phone}${btn}`)
      setActiveBtn(btn)
   }, [phone, setPhone]);

   const clearInputHandler = useCallback((btn: string) => {
      error && dispatch(setValidError(false));
      const clear = phone.slice(0, -1);
      setPhone(clear);
      setActiveBtn(btn);
   }, [setPhone, phone, error, dispatch]);

   const changeActiveClass = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
      let currentIndex = phoneButtons.indexOf(activeBtn);

      function setCurrentIndexAndActive(index: number) {
         currentIndex = index;
         setActiveBtn(phoneButtons[index]);
      }

      for (let i = 0; i < phoneButtons.length; i++) {
         if (e.key === 'ArrowLeft') {
            if (currentIndex === i) {
               setActiveBtn(phoneButtons[i - 1]);
            } else if (currentIndex === 0) {
               setActiveBtn(phoneButtons[phoneButtons.length - 1]);
            }
         }
         if (e.key === "ArrowRight") {
            if (currentIndex === i) {
               setActiveBtn(phoneButtons[i + 1]);
            } else if (currentIndex === phoneButtons.length - 1) {
               setCurrentIndexAndActive(0);
            }
         }
         if (e.key === 'ArrowDown') {
            if (currentIndex === i) {
               setActiveBtn(phoneButtons[i + 3]);
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
               setActiveBtn(phoneButtons[i - 3]);
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
         if (activeBtn !== 'clear') {
            if (phone.length > 10) {
               return;
            }
            onButtonClickHandler(activeBtn)
         } else {
            clearInputHandler(activeBtn)
         }
         setAnimateBtn(true)
      }
      if (e.key === 'Backspace') {
         clearInputHandler(activeBtn)
      }

   }, [activeBtn, phone, clearInputHandler, onButtonClickHandler]);

   return (
      <div className={s.buttonBlock} onKeyDown={changeActiveClass} onKeyUp={() => setAnimateBtn(false)}>
         {
            phoneButtons.map((btn, index) => {
               const activeClass = activeBtn === btn ? s.active : ''
               return btn === 'clear'
                  ? <button
                     key={index}
                     onClick={() => clearInputHandler(btn)}
                     className={`${s.btn} ${s.clear} ${animateBtn && activeBtn === btn ? s.click : ''} ${activeClass}`}
                  >СТЕРЕТЬ</button>
                  : <button
                     autoFocus={btn === '1'}
                     key={index}
                     onClick={() => onButtonClickHandler(btn)}
                     className={`${s.btn} ${animateBtn && activeBtn === btn ? s.click : ''} ${activeClass}`}
                  >{btn}</button>
            })
         }
      </div>
   )
})
