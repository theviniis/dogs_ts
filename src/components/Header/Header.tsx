import React from 'react';
import * as S from './Header.styles';
import { ReactComponent as Dogs } from '../../assets/dogs.svg';
import { Button } from '../elements';

export const Header = () => {
  return (
    <S.Header>
      <S.Nav as='nav'>
        <S.Logo to='/' aria-label='Dogs - Home'>
          <Dogs />
        </S.Logo>
        <S.Login to='/login'>
          <Button variant='ghost'>
            Login / Criar
            <S.User />
          </Button>
        </S.Login>
      </S.Nav>
    </S.Header>
  );
};
