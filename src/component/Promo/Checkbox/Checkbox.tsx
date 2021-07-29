import React, {ChangeEvent, useCallback} from "react";
import s from "./Checkbox.module.scss";

type CheckboxPropsType = {

}


export const Checkbox: React.FC<CheckboxPropsType> = React.memo(({children}) => {

   const onChangeCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      const change = e.currentTarget.checked;

   }, [])

   return (
      <label className={s.label}>
         <input
            type={'checkbox'}
            onChange={onChangeCallback}
            className={s.checkbox}
         />
         {children && <span className={s.spanClassName}>{children}</span>}
      </label>
   )
})
