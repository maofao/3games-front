import type { FC } from 'react';
import { Container, Title, Text, Button, Stack } from '@mantine/core';

export const MainPage: FC = () => {
  return (
    <Container size="lg" className="py-8">
      <Stack gap="md">
        <Title order={1}>Главная страница</Title>
        <Text size="lg">Добро пожаловать в наше приложение!</Text>
        <Button variant="filled" color="blue">
          Начать
        </Button>
      </Stack>
    </Container>
  );
}; 