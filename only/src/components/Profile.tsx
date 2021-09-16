import React, {useCallback} from "react";
import {Flex} from "./common/Flex";
import styled from "styled-components";
import {Button} from "./common/Button";

type ProfilePropsType = {
   userEmail: string
   setIsAuth: (value: boolean) => void
}

export const Profile: React.FC<ProfilePropsType> = React.memo(({userEmail, setIsAuth}) => {

   const logout = useCallback((value: boolean) => {
      setIsAuth(value);
      localStorage.removeItem('isAuth');
      localStorage.removeItem('userEmail');
   },[setIsAuth])

   return (
      <Flex justify='center' align='center' height='80vh' direction='column'>
         <ProfileTitle>Здравствуйте, <span>{userEmail}</span></ProfileTitle>
         <Button onClick={logout} width='200px' bgColor='#F5F5F5' color='#000'>Выйти</Button>
      </Flex>
   )
})

const ProfileTitle = styled.h2`
  font-size: 40px;
  line-height: 48px;
  span {
    font-size: inherit;
    font-weight: bold;
  }
`
