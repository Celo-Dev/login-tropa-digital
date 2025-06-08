import { useState } from 'react';
import * as styled from './SignIn.styles';

import illustration from '../../assets/image-login.png';
import logoTropa from '../../assets/logo-tropa.png';

import { useNavigate } from 'react-router-dom';

import InputField from '../../components/InputField/InputField';

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errors, setErrors] = useState<{ email?: string; senha?: string }>({});

  const onLoginClick = () => {
    const newErrors: { email?: string; senha?: string } = {};
    if (!email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    }
    if (!senha.trim()) {
      newErrors.senha = 'Senha é obrigatória';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const fadeOut = document.getElementById('page-wrapper');
    if (fadeOut) {
      fadeOut.style.opacity = '0';
      setTimeout(() => navigate('/eventos'), 300);
    } else {
      navigate('/eventos');
    }
  };

  return (
    <styled.PageWrapper id="page-wrapper">
      <styled.CentralContainer>
        <styled.LeftContainer>
          <styled.LeftContentContainer>
            <styled.Logo src={logoTropa} alt="Logo Tropa" />
            <styled.TextContainer>
              <styled.Title>Bem-vindo de volta</styled.Title>
              <styled.Subtitle>Entre com sua conta para acessar o painel.</styled.Subtitle>
            </styled.TextContainer>
            <styled.FormContainer>
              <InputField
                label="E-mail"
                type="email"
                placeholder="seunome@seuservidor.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
              />
              <InputField
                label="Senha"
                type="password"
                placeholder="Digite aqui"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                error={errors.senha}
              />
              <styled.Button onClick={onLoginClick}>Enviar</styled.Button>
            </styled.FormContainer>
          </styled.LeftContentContainer>
        </styled.LeftContainer>
        <styled.RightWrapper>
          <styled.RightContainer>
            <styled.Illustration src={illustration} alt="Ilustração" />
          </styled.RightContainer>
        </styled.RightWrapper>
      </styled.CentralContainer>
    </styled.PageWrapper>
  );
};

export default SignIn;
