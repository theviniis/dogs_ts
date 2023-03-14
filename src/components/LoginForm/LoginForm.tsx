import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks';
import { Button } from '../elements';
import { Input } from '../Input';
import * as S from './LoginForm.styles';

export const LoginForm = () => {
  const username = useForm('email');
  const password = useForm('password');

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
        <Input label='Usuário' type='text' {...username} />
        <Input label='Senha' type='password' {...password} />
        <Button>Enviar</Button>
      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </S.LoginForm>
  );
};
