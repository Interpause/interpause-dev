import Document, { Html, Head, Main, NextScript } from 'next/document'

// thanks to https://dev.to/sreetamdas/the-perfect-dark-mode-2d7g for getting rid of flash of light theme
const setInitialTheme = `(function(){c=window.localStorage.getItem("darkTheme");document.body.classList.add(((c==null)?window.matchMedia("(prefers-color-scheme:dark)").matches:c=="true")?"dark":"light")})()`;

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