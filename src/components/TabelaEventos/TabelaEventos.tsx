import React, { useState, useEffect, useRef } from 'react';
import * as styled from './TabelaEventos.styles';
import DropdownBusca from '../DropdownBusca/DropdownBusca';
import Submenu from '../SubmenuTabela/SubmenuTabela';

const dados = [
    {
        nome: 'Clube do Laço Coração Pantaneiro',
        equipes: 10,
        status: 'Ativo',
        data: '09 a 11 de Junho',
    },
    {
        nome: 'Clube do Laço Coração Pantaneiro',
        equipes: 10,
        status: 'Ativo',
        data: '09 a 11 de Junho',
    },
];

const opcoesBusca = [
    'FLORÊNCIO JOSÉ PEREIRA',
    'CORAÇÃO PANTANEIRO',
    'CLUBE DO LAÇO JARDIM',
    'CLUBE DO LAÇO GUIA LOPES',
    'NABILEQUE',
];

const TabelaEventos: React.FC = () => {
    const [submenuIndex, setSubmenuIndex] = useState<number | null>(null);
    const [filtro, setFiltro] = useState<string>('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [paginaAtual, setPaginaAtual] = useState(1);

    const totalPaginas = 3;


    const changePage = (novaPagina: number) => {
        if (novaPagina >= 1 && novaPagina <= totalPaginas) {
            setPaginaAtual(novaPagina);
        }
    };

    const submenuRef = useRef<HTMLDivElement | null>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const openSubmenu = (index: number) => {
        setSubmenuIndex(index === submenuIndex ? null : index);
    };

    const dadosFiltrados = dados.filter(evento =>
        evento.nome.toLowerCase().includes(filtro.toLowerCase())
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            if (submenuRef.current && !submenuRef.current.contains(target)) {
                setSubmenuIndex(null);
            }

            if (dropdownRef.current && !dropdownRef.current.contains(target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <styled.Container>
            <styled.HeaderContainer>
                <div />
                <styled.ActionsContainer>
                    <div ref={dropdownRef}>
                        <DropdownBusca
                            items={opcoesBusca}
                            isOpen={isDropdownOpen}
                            onToggle={() => setIsDropdownOpen((prev) => !prev)}
                            onClose={() => setIsDropdownOpen(false)}
                            onSelect={(valorSelecionado) => {
                                setFiltro(valorSelecionado);
                                setIsDropdownOpen(false);
                            }}
                        />
                    </div>
                    <styled.BtnInsertNew onClick={() => alert('Inserir novo')}>
                        + Inserir novo
                    </styled.BtnInsertNew>
                </styled.ActionsContainer>
            </styled.HeaderContainer>

            <styled.WrapperTabela>
                <styled.Header>
                    <styled.HeaderCell>Nome do evento</styled.HeaderCell>
                    <styled.HeaderCell>Total de equipes</styled.HeaderCell>
                    <styled.HeaderCell>Status</styled.HeaderCell>
                    <styled.HeaderCell>Data</styled.HeaderCell>
                    <styled.HeaderCell></styled.HeaderCell>
                </styled.Header>
                {dadosFiltrados.map((evento, index) => (
                    <styled.Row key={index}>
                        <styled.Cell>{evento.nome}</styled.Cell>
                        <styled.Cell>{evento.equipes}</styled.Cell>
                        <styled.Cell><styled.StatusDot /> {evento.status}</styled.Cell>
                        <styled.Cell>{evento.data}</styled.Cell>
                        <styled.Cell>
                            <styled.Actions>
                                <styled.MenuButton onClick={() => openSubmenu(index)}>⋮</styled.MenuButton>
                                {submenuIndex === index && (
                                    <div ref={submenuRef}>
                                        <Submenu
                                            onVisualizar={() => alert('Visualizar')}
                                            onEditar={() => alert('Editar')}
                                            onRemover={() => alert('Remover')}
                                        />
                                    </div>
                                )}
                            </styled.Actions>
                        </styled.Cell>
                    </styled.Row>
                ))}
            </styled.WrapperTabela>
            <styled.PaginationContainer>
                <styled.PaginationButton onClick={() => changePage(paginaAtual - 1)}>
                    Anterior
                </styled.PaginationButton>

                {[1, 2, 3].map((numero) => (
                    <styled.PageNumber
                        key={numero}
                        selected={paginaAtual === numero}
                        onClick={() => changePage(numero)}
                    >
                        {numero}
                    </styled.PageNumber>
                ))}

                <styled.NextButton selected onClick={() => changePage(paginaAtual + 1)}>
                    Próxima
                </styled.NextButton>
            </styled.PaginationContainer>
        </styled.Container>
    );
};

export default TabelaEventos;
