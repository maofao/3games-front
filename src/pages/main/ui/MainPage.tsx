import type { FC } from 'react';
import { Container, Title, Text, Button, Stack, useMantineColorScheme } from '@mantine/core';
import { ThemeSwitcher } from '../../../features/theme-switcher';
import { styles } from '../styles';

export const MainPage: FC = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Container 
      size="lg" 
      className={styles.container(dark)}
    >
      <Stack gap="md">
        <div className="flex justify-end">
          <ThemeSwitcher />
        </div>
        
        <Title 
          order={1} 
          className={styles.title(dark)}
        >
          Главная страница
        </Title>
        
        <Text 
          size="lg" 
          className={styles.text(dark)}
        >
          Добро пожаловать в наше приложение!
        </Text>
        
        <Button 
          variant="filled" 
          className={styles.button}
        >
          Начать
        </Button>
      </Stack>
    </Container>
  );
}; 