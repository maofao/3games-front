import { clsx } from 'clsx';

export const styles = {
  button: (dark: boolean) => clsx(
    'transition-all duration-300 ease-in-out transform hover:scale-105',
    'rounded-md px-4 py-2 font-medium shadow-sm hover:shadow-md',
    'focus:outline-none focus:ring-2 focus:ring-opacity-50',
    dark 
      ? 'text-yellow-400 hover:text-yellow-300 focus:ring-yellow-400 bg-gray-800 hover:bg-gray-700' 
      : 'text-blue-600 hover:text-blue-700 focus:ring-blue-500 bg-gray-100 hover:bg-gray-200'
  ),
  
  icon: (dark: boolean) => clsx(
    'transition-transform duration-300',
    dark ? 'text-yellow-400' : 'text-blue-600'
  ),
}; 