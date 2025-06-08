import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const SearchInput = styled.input`
  width: 203px;
  height: 36px;
  padding: 10px 15px 10px 40px;
  border-radius: 33px;
  background-color: #F6F6F6;
  border: none;
  outline: none;

  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0%;
  color: #00000033;

    &::placeholder {
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0%;
    color: #00000033;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #00000033;
  font-size: 18px;
  pointer-events: none;
`;


export const DropdownList = styled.div`
  position: absolute;
  top: 110%;
  width: 220px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 10px;
  z-index: 100;
`;

export const DropdownItem = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0%;
  color: #CC6237;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;
