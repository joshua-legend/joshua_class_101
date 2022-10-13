import styled from '@emotion/styled';
import {fontSize} from "@/styles/constantsCSS";
import {breakPoint, mq} from "@/styles/mediaquery/mediaquery";
import {textRainbowShadow} from "@/styles/animations/animations";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  animation: ${() => textRainbowShadow()} 1.5s ease-in-out 2;
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

interface IBadge {
  background:string;
}

export const IconsContainer = styled.section`
  display: grid;
  grid-template-rows: repeat(3,1fr);
  grid-template-columns: repeat(3,1fr);
`

export const Badge = styled.article<IBadge>`
  margin: 1.5em 3em;
  width: 6.4em;
  height: 6.4em;
  border-radius: 20%;
  display: inline-block;
  top: 0;
  transition: all 0.2s ease;
  background: ${props => props.background};
  box-shadow: 8px 10px 12px 3px rgba(0, 0, 0, 0.43);
`

export const Rounded = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background: white;
  position: absolute;
  margin: 15px 16px auto;
  z-index: 10;
  border-radius: 30%;
  box-shadow: 8px 8px 8px 2px rgba(0, 0, 0, 0.23);
`