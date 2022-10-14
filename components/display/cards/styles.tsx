import styled from '@emotion/styled';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px;
`
export const Square = styled.div`
  width: 300px;
  height: 500px;
  background: white;
  border-radius: 4px;
  box-shadow: 0px 20px 50px #D9DBDF;
  transition: all 0.3s ease;

  > img {
    width: 300px;
    position: absolute;
    clip: rect(0px, 300px, 220px, 0px);
    border-radius: 4px;
  }

  > h1 {
    margin: auto;
    text-align: left;
    margin-top: 240px;
    padding-left: 30px;
    font-family: 'Merriweather', serif;
    font-size: 24px;
  }

  > p {
    text-align: justify;
    padding-left: 30px;
    padding-right: 30px;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    color: #C8C8C8;
    line-height: 18px;
  }

  .button {
    background-color: #3EDD84;
    color: white;
    width: 90px;
    padding: 10px 18px;
    border-radius: 3px;
    text-align: center;
    text-decoration: none;
    display: block;
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 70px;
    font-size: 12px;
    cursor: pointer;
    font-family: 'merriweather';
  }
`

export const BtnContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Upper = styled.section`
  display: flex;
`