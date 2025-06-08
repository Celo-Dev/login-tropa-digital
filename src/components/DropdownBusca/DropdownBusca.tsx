import React from 'react';
import { FiSearch } from 'react-icons/fi';
import * as styled from './DropdownBusca.styles';

interface DropdownBuscaProps {
    items: string[];
    onSelect: (value: string) => void;
    isOpen: boolean;
    onToggle: () => void;
    onClose: () => void;
}

const DropdownBusca: React.FC<DropdownBuscaProps> = ({ items, onSelect, isOpen, onToggle }) => {
    const [busca, setBusca] = React.useState('');

    const itensFiltrados = items.filter(item =>
        item.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <styled.DropdownContainer>
            <styled.SearchInput
                placeholder="Buscar eventos"
                value={busca}
                onChange={(e) => {
                    setBusca(e.target.value);
                    if (!isOpen) onToggle();
                }}
                onFocus={onToggle}
            />
            <styled.SearchIcon>
                <FiSearch />
            </styled.SearchIcon>
            {isOpen && (
                <styled.DropdownList>
                    {itensFiltrados.map((item, idx) => (
                        <styled.DropdownItem
                            key={idx}
                            onClick={() => {
                                onSelect(item);
                                setBusca(item);
                            }}
                        >
                            {item}
                        </styled.DropdownItem>
                    ))}
                </styled.DropdownList>
            )}
        </styled.DropdownContainer>
    );
};

export default DropdownBusca;
