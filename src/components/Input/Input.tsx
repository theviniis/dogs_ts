import React from 'react';
import * as S from './Input.styles';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  ...props
}) => {
  return (
    <>
      <S.Label htmlFor='username'>{label}</S.Label>
      <S.Input
        id='username'
        type='text'
        value={value}
        onChange={onChange}
        {...props}
      />
    </>
  );
};
