import React from 'react';
import { useAuth } from '../../hooks/auth';
import { Login } from '../Login';
import { Profile } from '../Profile';

import {
  Container
} from './styles';

export function Home() {
  const { user } = useAuth()
  
  return (
    <Container>
      {!!user.id
        ? <Profile />
        : <Login />
      }
    </Container>
  );
}
