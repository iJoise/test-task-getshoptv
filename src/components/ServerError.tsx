import React from "react";
import styled from "styled-components";

type ServerErrorPropsType = {
   errorMessage: string | null
}

export const ServerError: React.FC<ServerErrorPropsType> = ({errorMessage}) => (
   <StyledError>
      <StyleIcon>!</StyleIcon>
      <StyledMessage>{errorMessage}</StyledMessage>
   </StyledError>
)

const StyledError = styled.h1`
  width: 100%;
  background: #F5E9E9;
  border: 1px solid #E26F6F;
  box-sizing: border-box;
  border-radius: 8px;
  height: 60px;
  padding: 20px;
`
const StyleIcon = styled.span`
  display: inline-block;
  text-align: center;
  width: 20px;
  height: 20px;
  background: #FFC8C8;
  border-radius: 50%;
  margin-right: 15px;
  font-size: 14px;
  line-height: 18px;
  color: #EE6565;
`
const StyledMessage = styled.span`
  font-size: 14px;
  line-height: 17px;
`
