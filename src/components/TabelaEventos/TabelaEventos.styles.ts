import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: #09428F2B;
  padding: 20px;
  gap: 10px;
  overflow: hidden;
  background: #FFFFFF;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export const ActionsContainer = styled.div`
  height: 36px;
  display: flex;
  gap: 10px;
  align-items: flex-end;
`;

export const BtnInsertNew = styled.button`
  width: 124px;
  height: 36px;
  border-radius: 33px;
  padding: 10px 15px;
  background-color: #CC6237;
  color: white;
  border: none;
  cursor: pointer;

  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0%;

      @media (max-width: 480px) {
        width: 100%;
        font-size: 12px;
        padding: 8px 12px;
    }
`;


export const WrapperTabela = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 12px 0;
    border-bottom: 1px solid #f0f0f0;

    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    color: #CC623780;
`;

export const HeaderCell = styled.div`
  flex: 1;
  padding: 0 8px;
  display: flex;
  align-items: center;

  &:last-child {
    justify-content: flex-end;
  }

      @media (min-width: 768px) {
        flex: 1;
    }
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;

  @media (min-width: 768px) {
      flex-wrap: nowrap;
  }
`;

export const Cell = styled.div`
  flex: 1;
  padding: 0 8px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0%;
  color: #657593;
  display: flex;
  align-items: center;

  &:last-child {
    justify-content: flex-end;
  }

  @media (min-width: 768px) {
    flex: 1;
  }
`;

export const StatusDot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: limegreen;
  border-radius: 50%;
  margin-right: 5px;
`;

export const Actions = styled.div`
  position: relative;
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #CC6237;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  gap: 8px;
`;

export const PaginationButton = styled.button<{ selected?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ selected }) => (selected ? '35px' : '75px')};
  height: 35px;
  border-radius: 200px;
  gap: 10px;
  padding: 10px 16px;
  border: none;
  cursor: pointer;

  background-color: ${({ selected }) => (selected ? '#CC6237' : '#F5F5F5')};
  color: ${({ selected }) => (selected ? '#FFFFFF' : '#000000')};

  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0%;
`;

export const PageNumber = styled(PaginationButton)`
  width: 35px;
  padding: 10px;
`;

export const NextButton = styled(PaginationButton)`
  width: 77px;
`;

