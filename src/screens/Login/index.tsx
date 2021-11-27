import React, { useState } from 'react';
import { UIButton } from '../../components/UIButton';
import { UIInput } from '../../components/UIInput';
import { useAuth } from '../../hooks/auth';

import {
  Buttons,
  Container,
  ErrorMessage,
  Footer,
  Header,
  Inputs,
  Title
} from './styles';

type ErrorType = 'name' | 'password' | 'all';

interface IErrorMessage {
  type: ErrorType;
  message: string;
}

export function Login() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState<IErrorMessage | undefined>()
  const { login } = useAuth()

  function handleCancel() {
    setName('')
    setPassword('')
    setErrorMessage(undefined)
  }

  function handleLogin() {
    const response = login(name, password)
    console.log(response.error)
    if (response.type !== 'success') return setErrorMessage(response.error)
  }

  function isError(type: ErrorType) {
    return errorMessage?.type === type || errorMessage?.type === 'all'
  }

  return (
    <Container>
      <Header>
        <Title>Tela de Login</Title>
      </Header>

      <Footer>
        {!!errorMessage && <ErrorMessage>{errorMessage.message}</ErrorMessage>}
        <Inputs>
          <UIInput
            title="Nome"
            value={name}
            onChangeText={setName}
            color={isError('name') ? '#ffdada' : '#fff'}
          />
          <UIInput
            title="Senha"
            secureTextEntry={true}
            textContentType='password'
            value={password}
            onChangeText={setPassword}
            color={isError('password') ? '#ffdada' : '#fff'}
          />
        </Inputs>

        <Buttons>
          <UIButton
            title="Cancelar"
            color="#ffdada"
            onPress={handleCancel}
          />
          <UIButton
            title="Login"
            color="#acf8a9"
            onPress={handleLogin}
          />
        </Buttons>
      </Footer>
    </Container>
  );
}
