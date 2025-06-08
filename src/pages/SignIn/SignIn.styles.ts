import styled from 'styled-components';

export const PageWrapper = styled.div`
  background-color: #F9FBFF;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
    transition: opacity 300ms ease-out;
`;

export const CentralContainer = styled.div`
  display: flex;
  background-color: #FFFFFF;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0px 100px 200px rgba(0, 0, 0, 0.25);
  max-width: 900px;
  width: 756.5px;
  height: 498px;

  @media (max-width: 820px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

export const LeftContentContainer = styled.div`
  width: 299px;
  height: 388px;
  gap: 35px;
  padding-bottom: 49px;
  display: flex;
  flex-direction: column;
`;

export const LeftContainer = styled.div`
  width: 339px;
  height: 478px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 40px 20px;

  @media (max-width: 820px) {
    height: auto;
    align-items: center;
    margin: 20px 0;
  }
`;

export const RightWrapper = styled.div`
  width: 397.5px;
  height: 478px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 820px) {
    width: 100%;
    height: auto;
    margin-top: 20px;
  }
`;

export const RightContainer = styled.div`
  background-color: #CC6237;
  border-radius: 20px;
  width: 355.5px;
  height: 478px;
  position: relative;
  display: flex;
  margin-left: 20px;
  justify-content: center;
  align-items: center;

  @media (max-width: 820px) {
    height: auto;
    margin-left: 0;
    padding: 20px 0;
  }
`;



export const Logo = styled.img`
  width: 172px;
  height: 42px;
`;

export const TextContainer = styled.div`
  width: 299px;
  height: 35px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 15px;
  letter-spacing: 0;
  color: #CC6237;
`;

export const Subtitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0;
  color:#2A4D8E80;
`;

export const FormContainer = styled.div`
  width: 299px;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

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

export const Input = styled.input`
  width: 299px;
  height: 40px;
  border-radius: 100px;
  padding: 10px 20px;
  background-color: #F6F6F6;
  border: none;

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0;
    color: #657593;
  }
`;


export const Button = styled.button`
  width: 299px;
  height: 40px;
  background-color: #CC6237;
  color: #FFFFFF;
  border: none;
  border-radius: 30px;
  padding: 0 20px;
  font-size: 13px;
  font-weight: 500px;
  cursor: pointer;
  transition: 0.2s;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover {
    opacity: 0.9;
  }
`;


export const Illustration = styled.img`
  width: 360px;
  height: 360px;
  position: absolute;
  top: 137px;
  right: 38px;

  @media (max-width: 820px) {
    position: static;
    width: 200px;
    height: 200px;
  }
`;

