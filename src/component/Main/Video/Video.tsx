import React from "react";
import s from "./Video.module.scss";
import video from "../../../assets/video/video.mp4";


export const Video: React.FC = React.memo(() => {

   return (
      <video autoPlay loop muted className={s.bgcVideo}>
         <source src={video} type={'video/mp4'}/>
      </video>
   )
})
