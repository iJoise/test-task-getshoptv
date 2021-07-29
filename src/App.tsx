import React from 'react';
import s from './App.module.scss';
import {Main} from "./component/Main/Main";
import {Promo} from "./component/Promo/Promo";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";

const App = () => {

   const showPromo = useSelector<AppRootStateType, boolean>(state => state.app.showPromo);

   return (
      <div className={s.App}>
         <div className={s.container}>
            {
               showPromo ? <Promo/> : <Main/>
            }
         </div>
      </div>
   );
}

export default App;

