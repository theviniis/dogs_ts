import React from 'react';
import * as S from './Header.styles';
import { ReactComponent as Dogs } from '../../assets/dogs.svg';

export const Header = () => {
  return (
    <S.Header>
      <S.Nav as='nav'>
        <S.Logo to='/' aria-label='Dogs - Home'>
          <Dogs />
        </S.Logo>
        <S.Login to='/login'>
          Login / Criar
          <S.User />
        </S.Login>
      </S.Nav>
    </S.Header>
  );
};
