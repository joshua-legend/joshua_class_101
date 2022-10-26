import styled from '@emotion/styled';
interface IWrapper{
    isMainOpen:boolean,
    backgroundColor?:string,
}
export const Wrapper = styled.div<IWrapper>`
  display: ${props => (props.isMainOpen ? 'flex' : 'none')};;
  opacity: ${props => (props.isMainOpen ? '1' : '0')};
  flex-direction: column;
  padding: 0.5rem 1.25rem;
  transition: all .5s;
  cursor: pointer;
  :hover {
    color: ${props => (props.backgroundColor)};
    border-radius: 10px;
  }
`
export const Title = styled.ul`
  display: flex;
  align-items: center;
  margin:5px 0;
  >span{
    font-family: 'Shadows Into Light', cursive;
    line-height: 0.5;
    margin-right:5px;
  }
`
