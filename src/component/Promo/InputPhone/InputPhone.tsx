import React, {FC} from "react";
import MaskedInput from "react-maskedinput";
import s from "./Input.module.scss";

type InputPhonePropsType = {
   phone: string
   error: boolean
}

export const InputPhone: FC<InputPhonePropsType> = React.memo(({phone, error}) => {

   return (
      <>
         <label>
            <MaskedInput mask="+7 (111) 111-11-11"
                         type={'text'}
                         name="phone"
                         readOnly={true}
                         disabled
                         className={`${s.input} ${error && s.error}`}
                         value={phone}
            />
         </label>
      </>
   )
})