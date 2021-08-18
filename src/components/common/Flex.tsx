import React, {ReactNode} from "react";
import styled from "styled-components";

type FlexPropsType = {
   direction?: string
   align?: string
   justify?: string
   margin?: string
   height?: string
   children: ReactNode
}

const StyledFlex = styled.div<FlexPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: ${({margin}) => margin || '0'};
  height: ${({height}) => height || 'auto'};
`

export const Flex: React.FC<FlexPropsType> = (props) => {

   return <StyledFlex {...props}/>
}
