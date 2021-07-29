import React, {ChangeEvent, useCallback} from "react";
import s from "./Checkbox.module.scss";

type CheckboxPropsType = {
   setChecked: (value: boolean) => void
   checked: boolean
}


export const Checkbox: React.FC<CheckboxPropsType> = React.memo(({children, setChecked, checked}) => {

   const onChangeCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      const change = e.currentTarget.checked;
      setChecked(change);
   }, [setChecked])

   return (
      <label className={s.label}>
         <input
            type={'checkbox'}
            onChange={onChangeCallback}
            className={s.checkbox}
            checked={checked}
         />
         {children && <span className={s.spanClassName}>{children}</span>}
      </label>
   )
})
