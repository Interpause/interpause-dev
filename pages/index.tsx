import Head from 'next/head'
import Link from 'next/link'
import 'twin.macro'
import { useHideHavbar } from '../components/Nav'
import { SocialsBar } from '../src/SocialsBar'

export default function OldIndex() {
  useHideHavbar()
  return (
    <>
      <Head>
        <title>Interpause | Portfolio</title>
        <meta name='description' content='My personal portfolio website.' />
        <meta name='topic' content='portfolio' />
        <meta name='keywords' content='interpause, developer, maker' />
      </Head>
      <div tw='absolute inset-0 flex flex-col items-center justify-center px-1.5'>
        <div tw='p-2 rounded-lg max-w-prose w-full'>
          <h1 tw='text-2xl'>John-Henry Lim</h1>
          <SocialsBar tw='mx-auto' />
          <Link href='/old'>
            <a tw='hocus:(text-link-color cursor-pointer underline)'>
              Goto old site...
            </a>
          </Link>
          <br />
          <Link href='resume'>
            <a tw='hocus:(text-link-color cursor-pointer underline)'>
              Latest Resume
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
