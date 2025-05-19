import { withTheme } from './providers/with-theme/index.tsx';
import { App } from './providers/app';
import '@mantine/core/styles.css';
import '@/shared/styles/index.css';

export const AppWithProviders = withTheme(() => <App />); 