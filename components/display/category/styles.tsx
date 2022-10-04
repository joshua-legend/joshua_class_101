import styled from '@emotion/styled';


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem 0;
  padding: 0 0.5rem;
`

export const Main = styled.div`
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
    top: 0; right: 0; bottom: 0; left: 0;
    inset: 0 0 0 0;
    background: hsl(200 100% 80%);
    z-index: -5;
    transition: transform .3s ease;
  }
  &:hover {
    &:before{
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`

export const Icon = styled.span`
  padding-right: 8px;
  padding-top: 1px;
`

export const Title = styled.span`
  font-family: 'rokaf';
`
export const Arrow = styled.div`
  padding-top:1px;
  padding-left:20px;
`