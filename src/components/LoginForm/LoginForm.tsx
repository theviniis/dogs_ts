import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../Input';
import * as S from './LoginForm.styles';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  return (
    <S.LoginForm>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label='Usuário'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label='Senha'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Enviar</button>
      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </S.LoginForm>
  );
};
