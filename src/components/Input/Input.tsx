import React from 'react';
import * as S from './Input.styles';
import * as T from './Input.types';

export const Input: React.FC<T.InputProps> = ({
  label,
  supportingText,
  id = 'input-id',
  name = 'input',
  type = 'text',
  placeholder,
  required = false,
  disabled = false,
  value = '',
  onChange,
  onBlur,
  errorMessage,
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <S.InputWrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input
        id={id}
        name={name}
        type={type}
        value={value}
        required={required}
        supportingText={supportingText}
        aria-describedby={id + '-supporting-text'}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
        {...props}
      />
      {(supportingText || errorMessage) && (
        <S.MessagesWrapper>
          {supportingText && (
            <S.SupportingText id={id + '-supporting-text'}>
              {supportingText}
            </S.SupportingText>
          )}
        </S.MessagesWrapper>
      )}
      {(startIcon || endIcon) && (
        <S.IconsWrapper>
          {startIcon && <span id={id + '-start-icon'}>{startIcon}</span>}
          {endIcon && <span id={id + '-end-icon'}>{endIcon}</span>}
        </S.IconsWrapper>
      )}
    </S.InputWrapper>
  );
};
