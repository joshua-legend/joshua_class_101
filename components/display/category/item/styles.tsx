import styled from '@emotion/styled';

interface IDropDown {
    isOpen: boolean,
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  line-height: 0px;
  font-family: 'bm';
`
export const DropDown = styled.div<IDropDown>`
  display: ${props => (props.isOpen ? 'block' : 'none')};;
  padding-left: 2px;
`
export const SubItem = styled.div`

`