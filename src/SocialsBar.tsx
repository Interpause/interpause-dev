import { HTMLProps } from 'react'
import tw, { css } from 'twin.macro'
import { Icon, ICON } from '../components/deco'

export function SocialsBar(props: HTMLProps<HTMLDivElement>) {
  return (
    <div
      tw='grid grid-cols-3 w-20 lg:(w-28)'
      css={css`
        a {
          ${tw`hocus:text-link-color`}
        }
      `}
      {...props}
    >
      <Icon as='a' href='https://github.com/Interpause' icon={ICON.github} />
      <Icon
        as='a'
        href='https://linkedin.com/in/Interpause'
        icon={ICON.linkedin}
      />
      <Icon
        as='a'
        href='https://www.youtube.com/@Interpause'
        icon={ICON.youtube}
      />
    </div>
  )
}
