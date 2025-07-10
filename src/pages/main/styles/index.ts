import { clsx } from 'clsx';

export const styles = {
  container: (dark: boolean) => clsx(
    'min-h-screen flex flex-col justify-center items-center w-full transition-all duration-300 ease-in-out',
    dark ? 'text-white' : 'text-gray-900'
  ),
  
  logo: (dark: boolean) => clsx(
    'text-8xl font-bold font-mono tracking-wider transition-all duration-300',
    'flex items-center justify-center gap-2',
    'animate-fade-in-up'
  ),
  
  logoLetter: clsx(
    'inline-block transition-all duration-300 ease-in-out',
    'bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent',
    'drop-shadow-lg hover:drop-shadow-xl',
    'transform hover:scale-125 hover:rotate-3',
    'animate-pulse hover:animate-none',
    'cursor-pointer',
    'hover:bg-gradient-to-r hover:from-purple-600 hover:via-orange-500 hover:to-red-500',
    'hover:bg-clip-text hover:text-transparent'
  ),
  
  buttonContainer: clsx(
    'mt-16 animate-fade-in-up',
    'animation-delay-300'
  ),
  
  button: clsx(
    'text-2xl font-bold px-12 py-6 rounded-xl',
    'bg-gradient-to-r from-orange-500 via-red-500 to-purple-600',
    'hover:from-orange-600 hover:via-red-600 hover:to-purple-700',
    'text-white shadow-2xl hover:shadow-3xl',
    'transition-all duration-300 ease-in-out transform hover:scale-110',
    'focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50',
    'animate-pulse hover:animate-none',
    'border-0'
  ),
  
  title: (dark: boolean) => clsx(
    'text-4xl font-bold mb-4 transition-colors duration-300',
    dark 
      ? 'text-white' 
      : 'text-gray-900'
  ),
  
  text: (dark: boolean) => clsx(
    'text-lg transition-colors duration-300',
    dark 
      ? 'text-gray-300' 
      : 'text-gray-600'
  ),
  
  card: (dark: boolean) => clsx(
    'p-6 rounded-lg transition-all duration-300 ease-in-out',
    'shadow-md hover:shadow-lg transform hover:-translate-y-1',
    dark 
      ? 'bg-gray-800 border-gray-700' 
      : 'bg-gray-50 border-gray-200',
    'border'
  ),
} as const; 