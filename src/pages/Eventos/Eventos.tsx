import logo from '../../assets/logo-tropa.png';
import userImage from '../../assets/user-placeholder.png';
import { FiUser, FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import TabelaEventos from '../../components/TabelaEventos/TabelaEventos';

import {
    LayoutDashboard,
    CalendarDays,
    Users2,
    UserCheck
} from "lucide-react";

import * as styled from './Eventos.styles';

const Eventos = () => {

    const navigate = useNavigate();

    return (
        <styled.Container>
            <styled.Sidebar>
                <styled.LogoWrapper>
                    <styled.Logo src={logo} alt="Tropa Logo" />
                </styled.LogoWrapper>

                <styled.MenuSection>
                    <styled.MenuTitleWrapper>
                        <styled.MenuTitle>MENU</styled.MenuTitle>
                    </styled.MenuTitleWrapper>
                    <styled.MenuWrapper>
                        <styled.MenuItem>
                            <LayoutDashboard size={20} />
                            <styled.MenuItemLabel>Dashboard</styled.MenuItemLabel>
                        </styled.MenuItem>

                        <styled.MenuItem active>
                            <CalendarDays size={20} />
                            <styled.MenuItemLabel active>Eventos</styled.MenuItemLabel>
                        </styled.MenuItem>

                        <styled.MenuItem>
                            <Users2 size={20} />
                            <styled.MenuItemLabel>Equipes</styled.MenuItemLabel>
                        </styled.MenuItem>

                        <styled.MenuItem>
                            <UserCheck size={20} />
                            <styled.MenuItemLabel>Inscrições</styled.MenuItemLabel>
                        </styled.MenuItem>
                    </styled.MenuWrapper>
                </styled.MenuSection>

                <styled.UserWrapper>
                    <styled.UserInfo>
                        <styled.UserImage src={userImage} alt="Foto do usuário" />
                        <styled.UserDetails>
                            <styled.UserName>Marcelo Pereira</styled.UserName>
                            <styled.UserRole>Administrador</styled.UserRole>
                        </styled.UserDetails>
                    </styled.UserInfo>

                    <styled.UserMenu>
                        <styled.UserAction><FiUser size={16} /> Alterar dados</styled.UserAction>
                        <styled.UserAction onClick={() => navigate('/')}><FiLogOut size={16} /> Sair</styled.UserAction>
                    </styled.UserMenu>
                </styled.UserWrapper>
            </styled.Sidebar>

            <styled.Content>
                <styled.Header>
                    <div>
                        <styled.WelcomeText>Bem vindo de volta, <styled.Username>Marcelo Pereira</styled.Username></styled.WelcomeText>
                        <styled.Title>Todos eventos</styled.Title>
                    </div>
                </styled.Header>
                <styled.TabelaWrapper>
                    <TabelaEventos />
                </styled.TabelaWrapper>

            </styled.Content>
        </styled.Container>
    );
};

export default Eventos;
