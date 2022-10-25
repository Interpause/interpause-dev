import { css } from 'twin.macro'
import Head from 'next/head'
import Link from 'next/link'
import { Icon } from '../components/deco'
import { Footer } from '../src/Footer'
/**
 * Summary: <potrait or picture slideshow> <some paragraph spam> See more
 * My Vision, My Passion, My Skills, some cringy headers with elab + shortcut at top ofc
 */
export default function About() {
  return (
    <div tw='h-screen text-left'>
      <Head>
        <title>Interpause | About Me</title>
        <meta name='description' content='My personal portfolio website.' />
        <meta name='topic' content='portfolio' />
        <meta name='keywords' content='interpause, developer, maker' />
      </Head>
      <div tw='h-20'></div>
      <div tw='mx-auto text-justify text-base max-w-screen-md space-y-3'>
        <h2 tw='text-center text-3xl'>I can die of cringe now</h2>
        <div tw='text-center text-xl'>
          <p>
            I am the <b tw='text-gray-400'>Framework</b> of my{' '}
            <span tw='text-yellow-400 font-mono'>Code</span>
          </p>
          <p>
            <u tw='text-yellow-800'>Structs</u> are my Body and{' '}
            <i tw='text-pink-400'>Syntax</i> is my Blood
          </p>
          <p>
            I have written over a <i>thousand</i>{' '}
            <span tw='font-mono text-blue-400'>Functions</span>
          </p>
          <p>
            <i tw='bg-gray-700 text-gray-300'>Unknown</i> to{' '}
            <b tw='text-red-600'>Bugs</b>
          </p>
          <p>
            Nor <i tw='bg-gray-700 text-gray-900'>known</i> to{' '}
            <u tw='text-green-400'>Tests</u>
          </p>
          <p>
            Have{' '}
            <span tw='text-decoration[line-through]'>
              withstood <i tw='text-red-400 text-lg'>pain</i>
            </span>{' '}
            to <b tw='text-purple-500'>Commit</b> many times
          </p>
          <p>
            Yet, those hands will{' '}
            <u>
              never <i tw='text-yellow-600'>Compile</i> anything
            </u>
          </p>
          <p>
            So as I pray,{' '}
            <span tw='font-mono text-3xl text-yellow-400'>
              Unlimited Code Works
            </span>
          </p>
        </div>
        <br />
        <h1 tw='text-4xl'>WHERE IS THE PAGE???</h1>
        <h3 tw='text-xl'>under construction duh</h3>
        <p>
          TODO:
          <br />
          - 1500 word essay
          <br />
          - Get someone else to write it for me so it's not considered boasting
          <br />
          - Headers be like: Vision, Passion, Skills <br />- remember to put
          shortcut card on top!
        </p>
      </div>
      <Footer />
    </div>
  )
}

export function Summary() {
  return (
    <section id='about' tw='md:(inline-grid grid-cols-12 gap-2) py-2'>
      <Icon
        src='/face.jpg'
        tw='col-span-4 w-full max-w-sm my-auto rounded-full overflow-hidden'
        css={css`
          &::before {
            content: '';
            display: inline-block;
            width: 1px;
            height: 0;
            padding-bottom: calc(100% / (1 / 1));
          }
        `}
      />
      <div tw='col-span-8 text-justify text-base mx-2 max-w-prose space-y-3'>
        <h2 tw='text-center text-2xl'>TODO: Actually complete this website</h2>
        <p>
          <em>What is this site meant to be?</em> A portfolio site.
        </p>
        <p>
          <em>What happened?</em> I got sidetracked into working on a component
          library for it.
        </p>
        <p>
          <em>What is the site right now?</em> A incomplete hub which has links
          to my other portfolios (Github, LinkedIn, etc), some of my more recent
          projects, and many grand plans hidden in the code that I don't have
          time for right now.
        </p>
        <p>
          <em>What will this site become?</em> It will remain dormant for now, I
          am shifting focus away from my component library to a competition I am
          currently preparing for, but after that, if I have time despite
          serving NS, I will focus on the blog sub-site I have yet to create.
        </p>
        <p>
          Anyways, I will likely continue work on it before I enroll into
          university, so that I can put my uni portfolio on it just in time for
          graduation.{' '}
          <span tw='hidden'>
            Anything I did before uni? Unless, I change my mind, they will
            likely not be recorded here or anywhere else.
          </span>
        </p>
        <p tw='hidden'>
          Also, click see more to see how I arrived to these conclusions, but I
          warn in advance it is embarassing.
        </p>
        <Link href='/about'>
          <a tw='inline-block text-white hocus:bg-info bg-info-hard py-1 px-4 rounded my-2 cursor-pointer'>
            See more...
          </a>
        </Link>
      </div>
    </section>
  )
}
