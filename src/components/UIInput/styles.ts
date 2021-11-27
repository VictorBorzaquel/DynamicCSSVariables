import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  
  border-width: 1px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 7px;
  border-color: #555;
  background-color: #555;
`;

export const Title = styled.Text`
  height: 100%;
  padding: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Input = styled.TextInput<{color: string}>`
  flex: 1;
  height: 100%;
  background-color: ${({color})=> color};
  border-radius: 7px;
  padding-left: 10px;
  font-size: 16px;
  color: #000;
`;