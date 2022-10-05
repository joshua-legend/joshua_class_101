import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  width: 320px;
  height: 450px;
  background: #232323;
  border-radius: 20px;
  overflow: hidden;
`;
export const _Card = styled.div`
    &:after{
      content: 'Nike';
      position: absolute;
      top: 30%;
      left: -20%;
      font-size: 12em;
      font-weight: 800;
      font-style: italic;
      color: rgba(255,255,25,0.05)
    }
`
export const ImgBox = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10000;
  width: 100%;
  height: 120px;
  transition: 0.5s;
  > img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-25deg);
    width: 270px;
  }
`
export const ContentBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  text-align: center;
  transition: 1s;
  z-index: 10;
  >h2{
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
    margin: 0;
  }
`

