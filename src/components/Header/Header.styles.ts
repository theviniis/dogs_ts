import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../elements';
import { ReactComponent as UserImg } from '../../assets/usuario.svg';

export const Header = styled.header`
  ${({ theme }) =>
    `box-shadow: 0 ${theme.border.width.xs}px 0 ${theme.colors.neutral[200]}`};
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0;
`;

export const Nav = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.spacing.xxxlg}rem;
`;

export const Logo = styled(Link)`
  all: unset;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xxs}rem 0;
  transition: fill ease-in-out 150ms;
  svg * {
    fill: ${({ theme }) => theme.colors.foreground};
  }
`;

export const Login = styled(Link)`
  display: flex;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxs}rem;
  background: transparent;
`;

export const User = styled(UserImg)`
  aspect-ratio: 1;
  width: 14px;
  position: relative;
`;
