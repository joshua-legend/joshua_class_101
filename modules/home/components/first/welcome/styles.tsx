import styled from '@emotion/styled';
import {fontSize} from "@/styles/constantsCSS";
import {breakPoint, MediaQuery} from "@/styles/mediaquery/mediaquery";
import {textRainbowShadow} from "@/styles/animations/animations";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Text = styled.div`
  animation: ${()=>textRainbowShadow()} 1.5s ease-in-out 2;
  font-family: 'Black Han Sans', sans-serif;
  font-weight: 400;
  line-height: 1;
  color: #011a32;
  font-size: ${fontSize.mega}px;
  ${MediaQuery[breakPoint.mobile]} {
    font-size: ${fontSize.medium}px
  }
  ${MediaQuery[breakPoint.tablet]} {
    font-size: ${fontSize.large}px
  }
`

export const Description = styled.p`
  
`

export const Numbers = styled.dl`
  display: flex;
  justify-content: space-around;
`

export const Box = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;

  > dt {
    font-size: 30px;
    color: #4fa5ff;
  }

  > dd {
    font-size: 25px;
    margin:0px;
  }
`