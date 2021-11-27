import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Header = styled.View`
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

export const User = styled.View`
  align-items: center;  
`;

export const UserImage = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 60px;
`;

export const UserName = styled.Text`
  font-size: 30px;
  padding: 10px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 10px;
  padding-right: 20px;
`;