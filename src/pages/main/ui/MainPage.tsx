import type { FC } from 'react';
import { Button, useMantineColorScheme } from '@mantine/core';
import { ThemeSwitcher } from '../../../features/theme-switcher';
import { styles } from '../styles';

export const MainPage: FC = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <div className={styles.container(dark) + ' flex-1 flex flex-col justify-center items-center w-full relative'}>
      <div className="absolute top-6 right-6">
        <ThemeSwitcher />
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className={styles.logo(dark)}>
          <span className={`${styles.logoLetter} logo-letter-animation`}>3</span>
          <span className={`${styles.logoLetter} logo-letter-animation`}>G</span>
          <span className={`${styles.logoLetter} logo-letter-animation`}>A</span>
          <span className={`${styles.logoLetter} logo-letter-animation`}>M</span>
          <span className={`${styles.logoLetter} logo-letter-animation`}>E</span>
          <span className={`${styles.logoLetter} logo-letter-animation`}>S</span>
        </h1>
        <div className={styles.buttonContainer}>
          <Button
            variant="filled"
            className={styles.button}
            size="xl"
            px={40}
            py={20}
          >
            Играть
          </Button>
        </div>
      </div>
    </div>
  );
};