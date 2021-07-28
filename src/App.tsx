import React from 'react';
import s from './App.module.scss';
import {Video} from "./component/Video/Video";
import {Banner} from "./component/Banner/Banner";

const App = () => {


   return (
      <div className={s.App}>
         <div className={s.container}>
            <Video/>
            <Banner/>
         </div>
      </div>
   );
}

export default App;

