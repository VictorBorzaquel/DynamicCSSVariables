import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Home } from './src/screens/Home';
import 'react-native-gesture-handler';
import { AuthProvider } from './src/hooks/auth';

export default function App() {
  return (
    <>
      <AuthProvider>
        <Home />
      </AuthProvider>
      <StatusBar style="dark" backgroundColor="transparent" translucent={false} />
    </>
  );
}
