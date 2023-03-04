import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ThemeProvider } from 'next-themes'
import Image from 'next/image'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider enableSystem={false} attribute='class'>
            <div className="bg-gradient-to-r bg-gray-50 dark:from-primary dark:to-primary-dark m-auto">
                <div className="align-middle items-center m-auto h-full">
                    <div className="m-auto w-xl max-w-full"></div>
                    <Header />
                    <div className="m-auto w-xl max-w-full">
                        <Component {...pageProps} />
                    </div>
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    );
}
