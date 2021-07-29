import React, {useEffect, useState} from "react";
import s from "./Banner.module.scss";
import qr from '../../../assets/image/qr.png'

// type BannerPropsType = {
// }


export const Banner: React.FC = () => {

   const [showBanner, setShowBanner] = useState(false);

   useEffect(() => {
      const timeout = setTimeout(() => {
         setShowBanner(true)
      }, 5000);
      return () => {
         clearTimeout(timeout);
      }
   }, []);

   return (
      <div className={s.banner}>
         <div className={`${s.banner__container} ${showBanner && s.showBanner}`}>
            <div className={s.banner__body}>
               <h3>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!
                  <div>ПОДАРИТЕ ЕМУ СОБАКУ!</div></h3>
               <img src={qr} alt="qr code"/>
               <p>Сканируйте QR-код или нажмите ОК</p>
               <button className={s.banner__btn}>OK</button>
            </div>
         </div>
      </div>
   )
}
