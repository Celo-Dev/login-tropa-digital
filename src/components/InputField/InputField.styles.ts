import styled from 'styled-components';

interface StyledInputProps {
    $hasError: boolean;
}


export const InputGroup = styled.div`
  width: 299px;
  height: 60px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: 600;
  line-height: 15px;
  color: #CC6237;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  height: 40px;
  border-radius: 100px;
  padding: 10px 40px 10px 20px;
  background-color: #F6F6F6;
  border: 1px solid ${({ $hasError }) => ($hasError ? 'red' : '#ccc')};

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #657593;
  }
`;

export const IconButton = styled.button`
  position: absolute;
  right: 12px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ErrorText = styled.span`
    font-size: 12px;
    color: #D32F2F;
    margin-top: 4px;
`;

