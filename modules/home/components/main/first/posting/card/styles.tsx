import styled from '@emotion/styled';
import {breakPoint, mq} from "@/styles/mediaquery/mediaquery";


export const Wrapper = styled.figure`
  display: flex;
  justify-content: center;
  background: #F9F9FE;
  border-radius: 4px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow: hidden;
  ${mq[breakPoint.mobileP]} {
    height: 200px;
    width: 140px;
  }
  ${mq[breakPoint.tabletP]} {
    height: 240px;
    width: 180px;
  }
  ${mq[breakPoint.laptop]} {
    height: 280px;
    width: 220px;
  }
  ${mq[breakPoint.desktop]} {
    height: 360px;
    width: 260px;
  }
`;
export const _Card = styled.figcaption`
  display: flex;
  flex-direction: column;
`
export const ImgBox = styled.div`
  height:75%;
  > img{
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const ContentsBox = styled.div`
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: 'Shadows Into Light', cursive;
  line-height: 0.5;
`

export const NumberBox = styled.div`

`
export const TitleBox = styled.div`
`

