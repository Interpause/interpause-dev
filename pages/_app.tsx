import { AppProps } from 'next/app';

// https://nextjs.org/docs/advanced-features/custom-app

function App({ Component, pageProps }:AppProps) {
	/* Component here is the currently rendered page. As such, any jsx here would
	 * persist across all the pages. Which is useful. For maybe a Navbar.
	 */
	return <Component {...pageProps} />
}

export default App;
