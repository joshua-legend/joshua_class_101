import styled from '@emotion/styled';

interface IDropDown {
    isOpen: boolean,
}

interface IWrapper{
    isMainOpen:boolean,
}
export const Wrapper = styled.div<IWrapper>`
  display: ${props => (props.isMainOpen ? 'flex' : 'none')};;
  opacity: ${props => (props.isMainOpen ? '1' : '0')};
  flex-direction: column;
  padding: 0.5rem 1.25rem;
  transition: all 1s;
  :hover {
    color: #ffc7d9;
    background-color: #FFF0F5;
    border-radius: 10px;
  }
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  margin:5px 0;
  >span{
    font-family: 'Shadows Into Light', cursive;
    line-height: 0.5;
    margin-right:5px;
  }
`
export const Sub_subject = styled.div`
`
export const DropDown = styled.div<IDropDown>`
  display: ${props => (props.isOpen ? 'block' : 'none')};;
  padding-left: 2px;
`