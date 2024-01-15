import Head from 'next/head'
import 'twin.macro'
import { useHideHavbar } from '../components/Nav'

export default function OldIndex() {
  useHideHavbar()
  return (
    <>
      <Head>
        <title>Interpause | Resume</title>
        <meta name='description' content='Resume.' />
        <meta name='topic' content='resume' />
        <meta name='keywords' content='interpause, developer, maker' />
      </Head>
      <div tw='grid fixed h-full w-full place-items-center'>
        <h1 tw='text-4xl'>Waiting for Microsoft Word to load...</h1>
      </div>
      <iframe
        src='https://onedrive.live.com/embed?resid=DAFBAD5E86133D01%21107199&amp;authkey=%21AB_hYJwH9Ufyaao&amp;em=2'
        tw='fixed inset-0 m-auto h-full max-w-full'
        width='1428px'
        height='864px'
        frameBorder='0'
      >
        This is an embedded{' '}
        <a target='_blank' href='https://office.com'>
          Microsoft Office
        </a>{' '}
        document, powered by{' '}
        <a target='_blank' href='https://office.com/webapps'>
          Office
        </a>
        .
      </iframe>
    </>
  )
}
