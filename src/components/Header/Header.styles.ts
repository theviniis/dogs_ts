import { Link } from 'react-router-dom';
import styled from 'styled-components';
import User from '../../assets/usuario.svg';
import { Container } from '../elements';

export const Header = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: #fff;
  top: 0;
  a,
  svg {
    color: #333;
    fill: #333;
  }
`;

export const Nav = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

export const Logo = styled(Link)`
  padding: 0.5rem 0;
`;

export const Login = styled(Link)`
  display: flex;
  align-items: center;
  &::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 17px;
    margin-left: 0.5rem;
    background: url(${User}) no-repeat center center;
    position: relative;
    top: -1px;
  }
`;
