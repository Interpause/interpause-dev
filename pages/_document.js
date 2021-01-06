import Document, { Html, Head, Main, NextScript } from 'next/document'

// thanks to https://dev.to/sreetamdas/the-perfect-dark-mode-2d7g for getting rid of flash of light theme
const setInitialTheme = `(function(){
	let conf = window.localStorage.getItem("darkTheme");
	if(conf === null){
		conf = window.matchMedia('(prefers-color-scheme: dark)').matches;
		else conf = false;
	}else conf = conf === "true";
	document.body.classList.add(conf?"dark":"light");
})()`;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
					<script dangerouslySetInnerHTML={{__html:setInitialTheme}}></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument