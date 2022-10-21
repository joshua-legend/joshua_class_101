import styled from '@emotion/styled';


export const Wrapper = styled.ul`
  padding: 10px 16px;
  list-style: none;
  > li{
    display: inline;
    font-size: 18px;
  }
  > li+li:before{
    padding: 8px;
    color: black;
    content: "/\\00a0";
  }
  > li a{
    color: #0275d8;
    text-decoration: none;
  }
  > li a:hover{
    color: #01447e;
    text-decoration: underline;
  }
`

