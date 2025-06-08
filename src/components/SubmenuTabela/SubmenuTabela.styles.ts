import styled from 'styled-components';

export const Container = styled.div`
  width: 123px;
  height: 105px;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 4px 4px 0px #0000000D;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;
`;


export const Option = styled.button<{ danger?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ danger }) => (danger ? '#FF3B30' : '#000')};
  background: none;
  border: none;
  border-bottom: 1px solid #0000000D;
  cursor: pointer;
  transition: background 0.2s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
