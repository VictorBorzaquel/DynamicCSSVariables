import React, { createContext, useContext, useState } from "react";

interface IUser {
  id: number;
  name: string;
  password: string;
  photo: string;
}

interface ILoginResponse {
  type: 'success' | 'error';
  error?: {
    type: 'name' | 'password' | 'all';
    message: string;
  }
}

const AuthContext = createContext({} as {
  user: IUser;
  login(name: string, password: string): ILoginResponse;
  logout(): void;
})

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState({} as IUser)

  const users = [
    { id: 1, name: 'testuser', password: 'mypassword', photo: 'https://github.com/VictorBorzaquel.png' }
  ] as IUser[]

  function login(name: string, password: string): ILoginResponse {
    const form = { name: name.trim(), password: password.trim() }

    if (form.name === '' && form.password === '') return {
      type: 'error',
      error: {
        type: 'all',
        message: 'Você precisa digitar o nome e a senha!'
      }
    }
    if (form.name === '') return {
      type: 'error',
      error: {
        type: 'name',
        message: 'Você precisa digitar o nome!'
      }
    }
    if (form.password === '') return {
      type: 'error',
      error: {
        type: 'password',
        message: 'Você precisa digitar a senha!'
      }
    }

    const user = users.find(user => user.name === name)

    if (!user) return {
      type: 'error',
      error: {
        type: 'name',
        message: 'Esse nome não existe!'
      }
    }
    if (user.password !== password) return {
      type: 'error',
      error: {
        type: 'password',
        message: 'Digite uma senha válida!'
      }
    }

    setUser(user)

    return { type: 'success' }
  }

  function logout() {
    setUser({} as IUser)
  }

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}