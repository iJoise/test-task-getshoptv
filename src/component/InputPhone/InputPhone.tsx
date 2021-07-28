import React, {FC} from "react";
import MaskedInput from "react-maskedinput";
import s from "./Input.module.scss";

type InputPhonePropsType = {
   phone: string
}

export const InputPhone: FC<InputPhonePropsType> = React.memo(({phone}) => {

   return (
      <>
         <label>
            <MaskedInput mask="+7 (111) 111-11-11"
                         type={'text'}
                         name="phone"
                         readOnly={true}
                         disabled
                         className={s.input}
                         value={phone}
            />
         </label>
      </>
   )
})