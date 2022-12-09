import { GlobalStyles } from 'twin.macro'
import { Global } from '@emotion/react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { Navbar } from '../components/Nav'
import { ToastWrapper } from '../components/Toast'
import { baseStyle, themeColor, DarkThemeWrapper } from '../components/theme'

// https://nextjs.org/docs/advanced-features/custom-app

const routes = {
  '/old': 'Home',
  '/old/#main': 'Projects',
  '/old/#timeline': 'Timeline',
  '/old/#about': 'About Me',
  '/gallery': 'Gallery',
} as const
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='robots' content='index, follow' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='language' content='English' />
        <meta
          name='viewport'
          content='width=device-width, height=device-height, initial-scale=1.0'
        />

        {/* https://realfavicongenerator.net/ */}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png?v=1'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png?v=1'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png?v=1'
        />
        <link rel='manifest' href='/favicon/site.webmanifest?v=1' />
        <link rel='shortcut icon' href='/favicon/favicon.ico?v=1' />
        <meta name='msapplication-TileColor' content={themeColor} />
        <meta
          name='msapplication-config'
          content='/favicon/browserconfig.xml'
        />
        <meta name='theme-color' content={themeColor} />
      </Head>
      <GlobalStyles />
      <Global styles={baseStyle} />
      <DarkThemeWrapper darkDefault>
        <ToastWrapper>
          <Navbar routes={routes} className='dark' />
          <Component {...pageProps} />
        </ToastWrapper>
      </DarkThemeWrapper>
    </>
  )
}
