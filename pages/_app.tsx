import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false} attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
