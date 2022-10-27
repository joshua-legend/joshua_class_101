import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  margin:auto;
`;

export const Cards = styled.section`
  display:flex;
  margin:auto;
  height:50%;
`

export const Card = styled.div`
  background-color: white;
  width: 250px;
  min-height: 404.5px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  box-shadow: 10px 10px 10px 10px #fb968b;
  border-radius: 10px;    
  > h2{
    margin: 0px;
    padding: 0px 0px 15px 0px;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 30px;
    color: #282828;
  }
  > hr{
    display: block;
    border: none;
    height: 3px;
    background-color: salmon;
    margin: 0px;
  }
  > p{
    margin: 15px 0px 0px 0px;
    font-family: 'Gamja Flower', cursive;
    font-weight: 100;
    line-height: 1.25;
    font-size: 20px;
    word-break: break-all;
  }
  >button{
    border: none;
    background-color: salmon;
    width: 50%;
    margin: 10px auto;
    padding: 10px 30px;
    color: white;
    font-family: "Noto Sans KR", sans-serif;
    text-transform: uppercase;
  }
`