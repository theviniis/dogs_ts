import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks';
import { Button, H4, Input } from '../';
import * as S from './LoginForm.styles';
import { Icon } from '../elements/Icon';

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
      <H4>Login</H4>
      <form onSubmit={handleSubmit}>
        <Input
          {...username}
          label='Usuário'
          type='text'
          supportingText='Texto de suporte'
        />
        <Input
          {...password}
          label='Senha'
          type='password'
          errorMessage='Este é um erro'
          startIcon={<Icon />}
          endIcon={<Icon />}
        />
        <Button skin='secondary' variant='ghost'>
          Enviar
        </Button>
      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </S.LoginForm>
  );
};
