import { clsx } from 'clsx';

export const styles = {
  button: (dark: boolean) => clsx(
    'transition-colors duration-200',
    dark ? 'text-yellow-500 hover:text-yellow-600' : 'text-blue-500 hover:text-blue-600'
  ),
}; 