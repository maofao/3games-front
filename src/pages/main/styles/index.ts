import { clsx } from 'clsx';

export const styles = {
  container: (dark: boolean) => clsx(
    'min-h-screen py-8 transition-colors duration-200',
    dark ? 'bg-background-dark text-text-dark' : 'bg-background-light text-text-light'
  ),
  
  title: (dark: boolean) => clsx(
    'text-4xl font-bold',
    dark ? 'text-text-dark' : 'text-text-light'
  ),
  
  text: (dark: boolean) => clsx(
    dark ? 'text-text-dark/80' : 'text-text-light/80'
  ),
  
  button: 'bg-primary hover:bg-primary-dark text-white transition-colors duration-200',
}; 