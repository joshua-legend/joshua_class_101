import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


interface IBadge {
  background:string;
}

export const IconsContainer = styled.section`
  display: grid;
  grid-template-rows: repeat(3,1fr);
  grid-template-columns: repeat(3,1fr);
`

export const Badge = styled.article<IBadge>`
  margin: 1.5em 3em;
  width: 6.4em;
  height: 6.4em;
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  transition: all 0.2s ease;
  background: ${props => props.background};
  box-shadow: 8px 10px 12px 3px rgba(0, 0, 0, 0.43);
  &:hover{
    box-shadow: 0px 0px 0px 0px;
  }
`

export const Rounded = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  z-index: 10;
  padding:10px;
  border-radius: 30%;
  box-shadow: 8px 8px 8px 2px rgba(0, 0, 0, 0.23);
`