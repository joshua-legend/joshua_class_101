import styled from '@emotion/styled';

export const Frame = styled.div`
  width: 100%;
  height:100vh;
  margin-top: 10rem;
  display: flex;
  justify-content: center;
`;
export const FlexLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:800px;
`
export const Title = styled.div`
  font-family: 'Black Han Sans', sans-serif;
  font-weight: 400;
  font-size: 50px;
`

export const Empty = styled.div`
  font-family: 'Black Han Sans', sans-serif;
  font-weight: 400;
  font-size: 40px;
`

interface ICardLayout {
    cardNum:number
}

export const CardLayout = styled.section<ICardLayout>`
  display: grid;
  grid-template-columns: ${props => props.cardNum !== 0 ? "repeat(3,1fr)" : "repeat(1,1fr)" };
`