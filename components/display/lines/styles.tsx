import styled from "@emotion/styled";

interface ILine{
    rotate:boolean,
}

export const Lines = styled.div<ILine>`
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: ${props => props.rotate ? "rotate(180deg)" : null};
  >svg{
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
    transform: ${props => props.rotate ? "rotateY(180deg)" : null};
    > path{
      fill: #374151;
    }
  }
`
