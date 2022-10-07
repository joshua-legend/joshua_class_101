import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`

