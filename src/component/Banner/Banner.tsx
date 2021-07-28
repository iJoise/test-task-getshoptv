import React from "react";
import s from "./Banner.module.scss";
import qr from '../../assets/image/qr.png'

// type BannerPropsType = {
//
// }


export const Banner: React.FC = () => {

   return (
      <div className={s.banner}>
         <div className={s.banner__container}>
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
