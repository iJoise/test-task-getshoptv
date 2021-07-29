import React from "react";
import s from "./VerifiedPhone.module.scss";


export const VerifiedPhone: React.FC = React.memo(() => {

   return (
      <div className={s.verified}>
         <h1>ЗАЯВКА ПРИНЯТА</h1>
         <p>Держите телефон под рукой. Скоро с Вами свяжется наш менеджер.</p>
      </div>
   )
})
