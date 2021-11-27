import React from 'react';
import { TextInputProps } from 'react-native';

import {
  Container, Input, Title
} from './styles';

export function UIInput({title, color, ...rest}: {
  title: string; 
  color: string;
} & TextInputProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Input
        color={color}
        autoCapitalize='none'
        autoCorrect={false}
        {...rest}
      />
    </Container>
  );
}
