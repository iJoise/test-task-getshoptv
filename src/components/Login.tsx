import React, {useCallback} from "react";
import {useForm} from "react-hook-form";
import {Flex} from "./common/Flex";
import styled from "styled-components";
import {ServerError} from "./ServerError";
import {api} from "../api/api";
import {Button} from "./common/Button";

type LoginPropsType = {
   errorMessage: string | null
   setErrorMessage: (error: string) => void
   setIsFetching: (value: boolean) => void
   isFetching: boolean
   setIsAuth: (value: boolean) => void
   setUserEmail: (userEmail: string) => void
}

type FormData = {
   email: string,
   password: string,
   rememberMe: boolean
};

export const Login: React.FC<LoginPropsType> = React.memo((props) => {
   const {errorMessage, setErrorMessage, setIsFetching, isFetching, setIsAuth, setUserEmail} = props;
   const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

   const onSubmit = useCallback(async (data: FormData) => {
      try {
         setIsFetching(true);

         const response = await api.login(data);

         setIsAuth(true);

         response.data.email && setUserEmail(response.data.email);

         if (response.data.rememberMe) {
            localStorage.setItem('isAuth', JSON.stringify(response.data.isAuth));
            localStorage.setItem('userEmail', JSON.stringify(response.data.email));
         }
      } catch(err) {
         setErrorMessage(err.data.message);
      } finally {
         setIsFetching(false);
      }
   }, [setErrorMessage, setIsFetching, setIsAuth, setUserEmail]);

   return (
      <LoginContainer>
         <Flex justify={'center'} align={'center'} height={'80vh'}>
            <Form onSubmit={handleSubmit(onSubmit)}>
               <ServerErrorBlock>
                  {errorMessage && <ServerError errorMessage={errorMessage}/>}
               </ServerErrorBlock>
               <Flex direction={'column'}>
                  <Label>Логин</Label>
                  <Input {...register("email", {required: true})} />
                  <StyledErrorContainer>
                     {errors.email && <StyledError>Обязательное поле</StyledError>}
                  </StyledErrorContainer>

                  <Label>Пароль</Label>
                  <Input type='password' {...register("password", {required: true})} />
                  <StyledErrorContainer>
                     {errors.password && <StyledError>Обязательное поле</StyledError>}
                  </StyledErrorContainer>

                  <LabelCheckbox>
                     Запомнить пароль
                     <Checkbox
                        type="checkbox"
                        {...register("rememberMe")}
                     />
                     <Checked/>
                  </LabelCheckbox>

                  <Button bgColor='#4A67FF' disabled={isFetching}>Войти</Button>
               </Flex>
            </Form>
         </Flex>
      </LoginContainer>
   );
})

const ServerErrorBlock = styled.div`
  height: 60px;
`
const LoginContainer = styled.h1`
  max-width: 650px;
  margin: 0 auto;
`
const Form = styled.form`
  min-width: 640px;
`
const Label = styled.label`
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 10px;
  margin-top: 20px;
  font-weight: normal;
`
const Input = styled.input`
  height: 60px;
  border-radius: 8px;
  border: none;
  background-color: #F5F5F5;
  padding: 20px;
  font-size: 16px;
  line-height: 19px;
  color: #232323;
  &:focus {
    outline: none;
  }
`
const StyledError = styled.span`
  padding-top: 8px;
  font-size: 14px;
  line-height: 17px;
  color: #E26F6F;
  font-weight: normal;
`
const StyledErrorContainer = styled.div`
  height: 25px;
`
const Checkbox = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;
const LabelCheckbox = styled.label`
  margin-top: 20px;
  position: relative;
  display: inline-block;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  padding-left: 35px;
`;
const Checked = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #000;
  border-radius: 4px;
  
  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Checkbox}:checked + &::after {
    display: block;
    top: 2px;
    left: 2px;
    width: 14px;
    height: 14px;
    background: #4A67FF;
    border-radius: 2px;
  }
`;
