import { useMantineColorScheme } from '@mantine/core';

export const useTheme = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return {
    dark,
    toggleTheme: toggleColorScheme,
  };
}; 