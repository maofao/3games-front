import type { FC } from 'react';
import { useMantineColorScheme } from '@mantine/core';
import { styles } from './styles';

export const Footer: FC = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <footer className={styles.footer(dark)}>
      <div className={styles.container}>
        {/* Логотип и описание */}
        <div className={styles.brandSection}>
          <div className={styles.logo}>
            <span className={styles.logoLetter}>3</span>
            <span className={styles.logoLetter}>G</span>
            <span className={styles.logoLetter}>A</span>
            <span className={styles.logoLetter}>M</span>
            <span className={styles.logoLetter}>E</span>
            <span className={styles.logoLetter}>S</span>
          </div>
          <p className={styles.description(dark)}>
            Лучшие игры для лучших игроков
          </p>
        </div>

        {/* Навигация */}
        <div className={styles.navigation}>
          <div className={styles.navSection}>
            <h3 className={styles.navTitle}>Игры</h3>
            <ul className={styles.navList}>
              <li><a href="#" className={styles.navLink(dark)}>Все игры</a></li>
              <li><a href="#" className={styles.navLink(dark)}>Популярные</a></li>
              <li><a href="#" className={styles.navLink(dark)}>Новые</a></li>
            </ul>
          </div>

          <div className={styles.navSection}>
            <h3 className={styles.navTitle}>Поддержка</h3>
            <ul className={styles.navList}>
              <li><a href="#" className={styles.navLink(dark)}>Помощь</a></li>
              <li><a href="#" className={styles.navLink(dark)}>Контакты</a></li>
              <li><a href="#" className={styles.navLink(dark)}>FAQ</a></li>
            </ul>
          </div>

          <div className={styles.navSection}>
            <h3 className={styles.navTitle}>Сообщество</h3>
            <ul className={styles.navList}>
              <li><a href="#" className={styles.navLink(dark)}>Форум</a></li>
              <li><a href="#" className={styles.navLink(dark)}>Discord</a></li>
              <li><a href="#" className={styles.navLink(dark)}>Telegram</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className={styles.bottom(dark)}>
        <div className={styles.bottomContent}>
          <p className={styles.copyright(dark)}>
            © 2024 3GAMES. Все права защищены.
          </p>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink(dark)}>Политика конфиденциальности</a>
            <a href="#" className={styles.legalLink(dark)}>Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}; 