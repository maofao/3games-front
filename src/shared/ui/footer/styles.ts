import { clsx } from 'clsx';

export const styles = {
  footer: (dark: boolean) => clsx(
    'w-full transition-all duration-300 ease-in-out',
    dark 
      ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900' 
      : 'bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100',
    dark 
      ? 'border-gray-700' 
      : 'border-gray-300',
    'border-t'
  ),

  container: clsx(
    'max-w-7xl mx-auto px-6 py-12',
    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
  ),

  brandSection: clsx(
    'lg:col-span-2 space-y-4'
  ),

  logo: clsx(
    'text-3xl font-bold font-mono tracking-wider',
    'flex items-center gap-1'
  ),

  logoLetter: clsx(
    'inline-block transition-all duration-300 ease-in-out',
    'bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent',
    'drop-shadow-md hover:drop-shadow-lg',
    'transform hover:scale-110 hover:rotate-2',
    'cursor-pointer',
    'hover:bg-gradient-to-r hover:from-purple-600 hover:via-orange-500 hover:to-red-500',
    'hover:bg-clip-text hover:text-transparent'
  ),

  description: (dark: boolean) => clsx(
    'text-lg max-w-md leading-relaxed transition-colors duration-300',
    dark ? 'text-gray-400' : 'text-gray-600'
  ),

  navigation: clsx(
    'grid grid-cols-1 sm:grid-cols-3 gap-8 lg:col-span-2'
  ),

  navSection: clsx(
    'space-y-4'
  ),

  navTitle: clsx(
    'text-lg font-bold mb-4',
    'bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent'
  ),

  navList: clsx(
    'space-y-2'
  ),

  navLink: (dark: boolean) => clsx(
    'block py-1 transition-all duration-200',
    'hover:translate-x-1 transform',
    'hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-600',
    'hover:bg-clip-text hover:text-transparent',
    dark 
      ? 'text-gray-400 hover:text-white' 
      : 'text-gray-600 hover:text-gray-900'
  ),

  bottom: (dark: boolean) => clsx(
    'py-6 transition-all duration-300',
    dark 
      ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 border-gray-700' 
      : 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 border-gray-300',
    'border-t'
  ),

  bottomContent: clsx(
    'max-w-7xl mx-auto px-6',
    'flex flex-col sm:flex-row justify-between items-center',
    'space-y-4 sm:space-y-0'
  ),

  copyright: (dark: boolean) => clsx(
    'text-sm transition-colors duration-300',
    dark ? 'text-gray-400' : 'text-gray-600'
  ),

  legal: clsx(
    'flex space-x-6'
  ),

  legalLink: (dark: boolean) => clsx(
    'text-sm transition-all duration-200',
    'hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-600',
    'hover:bg-clip-text hover:text-transparent',
    dark 
      ? 'text-gray-400 hover:text-white' 
      : 'text-gray-600 hover:text-gray-900'
  ),
}; 