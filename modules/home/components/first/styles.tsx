import styled from '@emotion/styled';
import {breakPoint, MediaQuery} from "@/styles/mediaquery/mediaquery";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  ${MediaQuery[breakPoint.tablet]} {
    flex-direction: column;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width:50%;
`

