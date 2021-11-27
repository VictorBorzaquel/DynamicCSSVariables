import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled(RectButton)<{color: string}>`
  width: 100%;
  flex-shrink: 1;
  margin: 5px;
  height: 70px;
  border-radius: 7px;
  background-color: ${({color})=> color};
  justify-content: center;
  align-items: center;
`;



export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;