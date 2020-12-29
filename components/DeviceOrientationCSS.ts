import { css } from "twin.macro";

export const mobileScreen = "@media screen and (max-width:768px)";
export const mobileLandscape = `${mobileScreen} and (orientation:landscape)`;
export const mobilePotrait = `${mobileScreen} and (orientation:potrait)`;
export const hideMobileLandscape = css`${mobileLandscape}{ display:none; }`;
export const hideMobilePotrait = css`${mobilePotrait}{ display:none; }`;