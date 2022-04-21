import tw, { css } from 'twin.macro'
import { SocialsBar } from './SocialsBar'
import { Icon, ICON } from '../components/deco'

export function Footer() {
  return (
    <footer tw='absolute flex flex-col justify-end w-full h-32 lg:h-20 border-t border-normal-hard bg-normal-soft'>
      <SocialsBar tw='mx-auto mt-2 text-trivial' />
      <p tw='text-sm text-center text-trivial mb-2'>
        © {new Date().getFullYear()} Interpause
      </p>
      <Icon
        as='button'
        onClick={() => document.documentElement.scrollTo({ top: 0 })}
        icon={ICON.arrow}
        tw='absolute lg:hidden top-1 left-1 text-normal opacity-30 hover:opacity-100 h-10 w-10'
        label='Scroll to top'
        labelStyle={css`
          ${tw`absolute text-left text-sm left-full top-0 transition-opacity w-16 pl-1`}
        `}
      />
    </footer>
  )
}
