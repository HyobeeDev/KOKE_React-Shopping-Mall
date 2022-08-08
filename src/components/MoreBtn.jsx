import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: block;
  width: 180px;
  height: 50px;
  font-size: 15px;
  font-weight: bold;
  background-color: white;
  border: 1px solid #cfcfcf;
  border-radius: 25px;
  box-sizing: border-box;
  transition: all .3s ease;
  :hover {
    border: 1px solid #FF6C57;
    color: #FF6C57;
  }
  :active {
    border: 1px solid #FF6C57;
    background-color: #FF6C57;
    color: white;
  }
`

export default function MoreBtn() {
  return (
    <ButtonStyled>모든 로스터리 보기</ButtonStyled>
  )
}
