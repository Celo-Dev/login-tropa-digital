import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import * as styled from './InputField.styles';

interface InputFieldProps {
    label: string;
    type: 'email' | 'password' | 'text';
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    type,
    placeholder,
    value,
    onChange,
    error
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;

    return (
        <styled.InputGroup>
            <styled.LabelWrapper>
                <styled.Label>{label}</styled.Label>
                {error && <styled.ErrorText>{error}</styled.ErrorText>}
            </styled.LabelWrapper>
            <styled.InputWrapper>
                <styled.StyledInput
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    $hasError={!!error}
                />
                {isPassword && (
                    <styled.IconButton type="button" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FiEyeOff size={18} color="#CC6237" /> : <FiEye size={18} color="#CC6237" />}
                    </styled.IconButton>
                )}
            </styled.InputWrapper>
        </styled.InputGroup>
    );
};

export default InputField;
