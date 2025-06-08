import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-color: #F8F8F8;
    height: 100vh;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;


export const Sidebar = styled.div`
    width: 210px;
    background-color: #FFFFFF;
    border-right: 1px solid #0000001A;
    display: flex;
    flex-direction: column;
    height: 100vh;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        flex-direction: column;
        border-right: none;
        border-bottom: 1px solid #0000001A;
    }
`;


export const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0;

    @media (max-width: 768px) {
        padding: 0 10px;
    }
`;


export const Logo = styled.img`
    width: 190px;
`;

export const MenuTitleWrapper = styled.div`
    width: 100%;
    padding-left: 28px;
`;


export const MenuItem = styled.div<{ active?: boolean }>`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 6px;
    font-weight: ${props => (props.active ? '500' : '400')};
    color: ${props => (props.active ? '#fff' : '#000')};
    background-color: ${props => (props.active ? '#D26335' : 'transparent')};
    cursor: pointer;

    &:hover {
        background-color: ${props => (props.active ? '#D26335' : '#f0f0f0')};
    }

    svg {
        color: ${props => (props.active ? '#fff' : '#000')};
    }
`;

export const MenuSection = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    width: 100%;
`;

export const MenuTitle = styled.span`
    font-family: Roboto, sans-serif;
    font-weight: 800;
    font-size: 9px;
    line-height: 15px;
    letter-spacing: 0.12em;
    color: #A3A3A3;
    margin-bottom: 16px;
`;

export const MenuItemLabel = styled.span<{ active?: boolean }>`
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    letter-spacing: 0%;
    color: ${props => (props.active ? '#fff' : '#252525')};
`;


export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding: 0 15px;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 7px;
    }
`;


export const UserWrapper = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin-top: auto;
    gap: 5px;
    border-top: 1px solid #E0E0E0;

    @media (min-width: 769px) {
        width: 210px;
        height: 182px;
        padding: 30px 25px;
        border-right: 1px solid #E0E0E0;
    }
`;



export const UserInfo = styled.div`
    width: 160px;
    height: 42px;
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const UserImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #D26335;
`;

export const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

export const UserName = styled.span`
    font-family: Roboto, sans-serif;
    font-weight:700;
    font-size: 14px;
`;

export const UserRole = styled.span`
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 11px;
    color: #00000080;
`;

export const UserMenu = styled.div`
    width: 160px;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const UserAction = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    color: #252525;
    cursor: pointer;

    &:hover {
        color: #D26335;
    }
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    width: 100%;
    max-width: 1290px;
    height: auto;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 769px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 119px;
    }
`;

export const WelcomeText = styled.p`
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    margin: 0;
`;

export const Username = styled.span`
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 15px;
`;

export const Title = styled.h2`
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 20px;
    margin-top: 14px;
    color: #CC6237E5;
    gap: 10px;
`;

export const TabelaWrapper = styled.div`
    padding: 10px 30px 30px 30px;
    gap: 30px;
`;
