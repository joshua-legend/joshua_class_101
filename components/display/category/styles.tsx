import styled from '@emotion/styled';
import {tiltShaking} from "@/styles/animations/animations";
import {breakPoint, mq} from "@/styles/mediaquery/mediaquery";
import {fontSize} from "@/styles/constantsCSS";

interface IMain {background?:string,}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem 0;
  padding: 0 0.5rem;
`

export const Icon = styled.span`
  padding-right: 8px;
  padding-top: 1px;
  color:#4b636e;
`

export const Main = styled.div<IMain>`
  display: flex;
  position: relative;
  transition: all 0.25s;
  cursor: pointer;
  padding: 5px 10px;
  &:before{
    transform: scaleX(0);
    transform-origin: bottom right;
    content: " ";
    display: block;
    position: absolute;
    inset: 30px 0 0 0;
    background: ${props => (props.background)};
    z-index: 1;
    transition: transform .3s ease;
  }
  &:hover {
    animation: ${()=>tiltShaking} .4s ease-in-out;
    &:before{
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
  ${mq[breakPoint.laptop]}{font-size:${fontSize.regular}px}
`

export const Title = styled.span`
  font-family: 'rokaf';
  color:#4b636e;
`
export const Arrow = styled.div`
  padding-top:1px;
  padding-left:10px;
`