import styled from '@emotion/styled';


export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  width:100%;
  border-radius: 3px;
  border:1px solid #ddd; 
  > li{
    font-size: 1.5rem;
    line-height: 1.125;
    padding:0.25rem;
    margin-bottom: 0;
    border-bottom:1px solid #ddd;
  }
  > li:hover{
    background:lightgray;
  }
  
`
