import { Toaster } from '../ui/sonner';
import { NextIntlProvider } from './NextIntlProvider';
import { StoreProvider } from './StoreProvider';
import { ThemeProvider } from './ThemeProvider';

export default function GlobalProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextIntlProvider>
      <StoreProvider>
        <ThemeProvider>
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </StoreProvider>
    </NextIntlProvider>
  );
}
