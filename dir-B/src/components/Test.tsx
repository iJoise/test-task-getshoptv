import React, {useEffect, useState} from "react";

let count = 1

export const Test: React.FC = () => {
   console.log(count)
   const [x, setX] = useState(5);
   console.log("GLOBAL SCOPE LOG");
   useEffect(() => {
      console.log("USE EFFECT BODY LOG");
      setX(6);
      return () => console.log("USE EFFECT RETURN LOG");
   }, [x]);

   return <>{console.log("JSX LOG")}
      {   count++}
   </>;

}
