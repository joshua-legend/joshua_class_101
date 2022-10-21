import styled from '@emotion/styled';

export const Frame = styled.div`
  width: 100%;
  height:100%;
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
export const CardLayout = styled.section`
  display: grid;
  grid-template-columns: repeat(3,1fr);
`