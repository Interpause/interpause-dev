import { css, theme } from 'twin.macro'

export const mobileScreen = `@media screen and (max-width:${
  parseFloat(theme`screens.md`) - 1
}px)`
export const mobileLandscape = `${mobileScreen} and (orientation:landscape)`
export const mobilePotrait = `${mobileScreen} and (orientation:portrait)`
export const hideMobileLandscape = css`
  ${mobileLandscape} {
    display: none;
  }
`
export const hideMobilePotrait = css`
  ${mobilePotrait} {
    display: none;
  }
`
