import React from 'react';
import { UIButton } from '../../components/UIButton';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Footer,
  Header,
  Title,
  User,
  UserImage,
  UserName
} from './styles';

export function Profile() {
  const { user, logout } = useAuth()

  function handleLogout() {
    logout()
  }

  return (
    <Container>
      <Header>
        <Title>Perfil</Title>
      </Header>

      <User>
        <UserImage
          source={{ uri: user.photo }}
        />
        <UserName>{user.name}</UserName>
      </User>

      <Footer>
        <UIButton
          title="Sair da conta"
          color="#ffdada"
          onPress={handleLogout}
        />
      </Footer>
    </Container>
  );
}
