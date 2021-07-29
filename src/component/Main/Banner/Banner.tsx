import React, {useCallback, useEffect, useState} from "react";
import s from "./Banner.module.scss";
import qr from '../../../assets/image/qr.png'
import {useDispatch} from "react-redux";
import {showPromoPage} from "../../../state/app-reducer";

// type BannerPropsType = {
// }


export const Banner: React.FC = React.memo(() => {

   const [showBanner, setShowBanner] = useState(false);
   const dispatch = useDispatch();

   useEffect(() => {
      const timeout = setTimeout(() => {
         setShowBanner(true)
      }, 5000);
      return () => {
         clearTimeout(timeout);
      }
   }, []);

   const showPromoPageHandler = useCallback(() => {
      dispatch(showPromoPage(true));
   }, [dispatch])

   return (
      <div className={s.banner}>
         <div className={`${s.banner__container} ${showBanner && s.showBanner}`}>
            <div className={s.banner__body}>
               <h3>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!
                  <div>ПОДАРИТЕ ЕМУ СОБАКУ!</div></h3>
               <img src={qr} alt="qr code"/>
               <p>Сканируйте QR-код или нажмите ОК</p>
               <button onClick={showPromoPageHandler} className={s.banner__btn}>OK</button>
            </div>
         </div>
      </div>
   )
})
