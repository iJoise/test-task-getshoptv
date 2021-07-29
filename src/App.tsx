import React from 'react';
import s from './App.module.scss';
import {Main} from "./component/Main/Main";
import {Promo} from "./component/Promo/Promo";

const App = () => {


   return (
      <div className={s.App}>
         <div className={s.container}>
            {/*<Main/>*/}
            <Promo/>
         </div>
      </div>
   );
}

export default App;

