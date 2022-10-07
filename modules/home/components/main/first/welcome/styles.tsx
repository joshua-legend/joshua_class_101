import styled from '@emotion/styled';
import {fontSize} from "@/styles/constantsCSS";
import {breakPoint, mq} from "@/styles/mediaquery/mediaquery";
import {textRainbowShadow} from "@/styles/animations/animations";

export const Wrapper = styled.div`
  display: flex;
`;

export const Text = styled.div`
  animation: ${()=>textRainbowShadow()} 1.5s ease-in-out 2;
  font-weight: 900;
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
    font-size: ${fontSize.large}px
  }
  ${mq[breakPoint.desktop]} {
    font-size: ${fontSize.giant}px
  }
`