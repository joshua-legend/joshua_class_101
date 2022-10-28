import styled from '@emotion/styled';
import {fontSize} from "@/styles/constantsCSS";
import {breakPoint, MediaQuery} from "@/styles/mediaquery/mediaquery";
import {textRainbowShadow} from "@/styles/animations/animations";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

export const Text = styled.div`
  //animation: ${()=>textRainbowShadow()} 1.5s ease-in-out 2;
  color: lightsteelblue;
  font-family: 'Black Han Sans', sans-serif;
  font-weight: 400;
  background: linear-gradient(to right, #fbcac9, #8ca6ce);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 55px;
  white-space: nowrap;
  ${MediaQuery[breakPoint.mobile]} {
    font-size: 20px
  }
  ${MediaQuery[breakPoint.tablet]} {
    font-size: 30px
  }
  ${MediaQuery[breakPoint.laptop]} {
    font-size: 45px
  }
`
export const Cards = styled.section`
  display: flex;
  justify-content: center;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  > span{
    font-family: 'Gamja Flower', cursive;
    font-weight: 100;
    white-space: nowrap;
  }
`
export const Tables = styled.dl`
  display: flex;
  justify-content: space-around;
  width: 100%;
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