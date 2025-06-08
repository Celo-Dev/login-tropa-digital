import React from 'react';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import * as styled from './SubmenuTabela.styles';

interface SubmenuProps {
    onVisualizar: () => void;
    onEditar: () => void;
    onRemover: () => void;
}

const SubmenuTabela: React.FC<SubmenuProps> = ({ onVisualizar, onEditar, onRemover }) => {
    return (
        <styled.Container>
            <styled.Option onClick={onVisualizar}>
                <styled.IconWrapper><Eye size={18} /></styled.IconWrapper>
                Visualizar
            </styled.Option>
            <styled.Option onClick={onEditar}>
                <styled.IconWrapper><Pencil size={18} /></styled.IconWrapper>
                Editar
            </styled.Option>
            <styled.Option danger onClick={onRemover}>
                <styled.IconWrapper><Trash2 size={18} color="#FF3B30" /></styled.IconWrapper>
                Remover
            </styled.Option>
        </styled.Container>
    );
};

export default SubmenuTabela;
