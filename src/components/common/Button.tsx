import React from "react";
import styled from "styled-components";

type ButtonPropsType =  {
   bgColor?: string
   color?: string
   width?: string
   disabled?: boolean
   onClick?: (value: boolean) => void
}



export const Button: React.FC<ButtonPropsType> = (props) => {
   const {children, onClick, ...restProps} = props

   const onClickHandler = () => {
      onClick && onClick(false);
   }

   return <StyledButton onClick={onClickHandler} {...restProps}>{children}</StyledButton>

}

const StyledButton = styled.button<ButtonPropsType>`
  margin-top: 40px;
  height: 60px;
  border-radius: 8px;
  background: ${props => props.disabled ? '#99A9FF' : props.bgColor};
  color: ${props => props.color || '#fff'};
  border: none;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  width: ${props => props.width || 'auto'};
  &:active {
    transform: scale(0.98);
  }
`