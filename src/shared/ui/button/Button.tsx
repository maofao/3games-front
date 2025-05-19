import type { FC, ButtonHTMLAttributes } from 'react';
import { Button as MantineButton } from '@mantine/core';
import type { ButtonProps as MantineButtonProps } from '@mantine/core';

export interface ButtonProps extends Omit<MantineButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  ...props
}) => {
  // Преобразуем наши варианты в варианты Mantine
  const mantineVariant = variant === 'primary' 
    ? 'filled' 
    : variant === 'secondary' 
      ? 'light' 
      : 'outline';

  return (
    <MantineButton
      variant={mantineVariant}
      size={size}
      fullWidth={fullWidth}
      {...props}
    >
      {children}
    </MantineButton>
  );
}; 