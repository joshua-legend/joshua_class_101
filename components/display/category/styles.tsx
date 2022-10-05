import styled from '@emotion/styled';
import useMediaQuery from "../../../hooks/useMediaQuery";
import {keyframes} from "@emotion/react";

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

interface IMain {
    background?:string,
}
const test = () => keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(2deg); }
  50% { transform: rotate(0eg); }
  75% { transform: rotate(-2deg); }
  100% { transform: rotate(0deg); }
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
    animation: ${()=>test()} .4s ease-in-out;
    &:before{
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  ${()=>useMediaQuery(3)}{font-size:18px},
  ${()=>useMediaQuery(2)}{font-size:14px},
  ${()=>useMediaQuery(1)}{font-size:10px},
  ${()=>useMediaQuery(0)}{font-size:8px},

//@keyframes tilt-shaking {
//  0% { transform: rotate(0deg); }
//  25% { transform: rotate(2deg); }
//  50% { transform: rotate(0eg); }
//  75% { transform: rotate(-2deg); }
//  100% { transform: rotate(0deg); }
//}
`




export const Title = styled.span`
  font-family: 'rokaf';
  color:#4b636e;
`
export const Arrow = styled.div`
  padding-top:1px;
  padding-left:20px;
`