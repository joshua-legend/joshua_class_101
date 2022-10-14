import styled from '@emotion/styled';
import {fontSize} from "@/styles/constantsCSS";
import {breakPoint, mq} from "@/styles/mediaquery/mediaquery";
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
  ${mq[breakPoint.mobileP]} {
    font-size: ${fontSize.regular}px
  }
  ${mq[breakPoint.tabletP]} {
    font-size: ${fontSize.regular}px
  }
  ${mq[breakPoint.tabletL]} {
    font-size: ${fontSize.medium}px
  }
  ${mq[breakPoint.laptop]} {
    font-size: ${fontSize.xmega}px
  }
  ${mq[breakPoint.desktop]} {
    font-size: ${fontSize.xmega}px
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