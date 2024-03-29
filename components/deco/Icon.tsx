/**
 * @file some sort of icon wrapper.
 * @author John-Henry Lim <hyphen@interpause.dev>
 */
import tw, { css, styled } from 'twin.macro'
import { SerializedStyles } from '@emotion/react'
import Image, { ImageProps } from 'next/image'
import { OrientableSVG } from '.'

export enum ICON {
  /** https://iconmonstr.com/linkedin-3-svg/ but rescaled & their license agreement says no attribution needed so yay */
  linkedin = 'M811 0h-597c-118 0-213 96-213 213v597c0 118 96 213 213 213h597c118 0 213-96 213-213v-597c0-118-95-213-213-213zm-469 811h-128v-469h128v469zm-64-523c-41 0-75-34-75-75s33-75 75-75s75 34 75 75s-33 75-75 75zm576 523h-128v-239c0-144-171-133-171 0v239h-128v-469h128v75c60-110 299-118 299 106v288z',
  instagram = 'M649.9 234.2c-36-1.6-46.8-2-137.9-2s-101.9.3-137.9 2c-92.6 4.2-135.7 48.1-139.9 139.9c-1.7 36-2 46.8-2 137.9s.4 101.9 2 137.9c4.2 91.6 47.2 135.7 139.9 139.9c36 1.6 46.8 2 137.9 2c91.2 0 102-.3 137.9-2c92.6-4.2 135.7-48.2 139.9-139.9c1.6-36 2-46.8 2-137.9s-.3-101.9-2-137.9c-4.2-91.9-47.4-135.8-139.9-140zm-137.9 453.1c-96.8 0-175.3-78.5-175.3-175.3c0-96.8 78.5-175.3 175.3-175.3s175.3 78.5 175.3 175.3c0 96.8-78.5 175.3-175.3 175.3zm182.2-316.5c-22.6 0-41-18.3-41-41s18.3-41 41-41s41 18.3 41 41s-18.3 41-41 41zm-68.4 141.2c0 62.8-50.9 113.8-113.8 113.8s-113.8-50.9-113.8-113.8c0-62.8 50.9-113.8 113.8-113.8s113.8 50.9 113.8 113.8zm184.9-512h-597.3c-117.8 0-213.3 95.5-213.3 213.3v597.3c0 117.8 95.5 213.3 213.3 213.3h597.3c117.8 0 213.3-95.5 213.3-213.3v-597.3c0-117.8-95.5-213.3-213.3-213.3zm40.6 652.7c-5.6 124.1-74.7 192.9-198.5 198.6c-36.4 1.7-48 2-140.8 2s-104.3-.4-140.7-2c-124.1-5.7-192.9-74.6-198.6-198.6c-1.7-36.4-2-48-2-140.7c0-92.7.4-104.3 2-140.7c5.7-124.1 74.6-192.9 198.6-198.5c36.4-1.7 48-2.1 140.7-2.1s104.3.4 140.8 2c124.1 5.7 193 74.7 198.5 198.5c1.7 36.4 2 48.1 2 140.8c0 92.7-.4 104.3-2 140.7z',
  github = 'M810.7 0h-597.3c-117.8 0-213.3 95.5-213.3 213.3v597.3c0 117.8 95.5 213.3 213.3 213.3h597.3c117.8 0 213.3-95.5 213.3-213.3v-597.3c0-117.8-95.5-213.3-213.3-213.3zm-190.5 835.8c-17.3 3.3-22.8-7.3-22.8-16.4v-93.7c0-31.9-11.2-52.6-23.5-63.2c76-8.4 155.9-37.3 155.9-168.4c0-37.3-13.3-67.8-35.1-91.6c3.5-8.6 15.2-43.3-3.4-90.3c0 0-28.6-9.2-93.8 35c-27.3-7.7-56.5-11.4-85.5-11.6c-29 .1-58.2 3.9-85.5 11.5c-65.2-44.2-93.9-35-93.9-35c-18.5 47-6.8 81.7-3.3 90.4c-21.8 23.9-35.2 54.3-35.2 91.6c0 130.7 79.7 160 155.5 168.7c-9.8 8.5-18.6 23.6-21.7 45.7c-19.5 8.7-68.9 23.8-99.3-28.4c0 0-18-32.8-52.4-35.2c0 0-33.3-.4-2.3 20.8c0 0 22.4 10.5 37.9 49.9c0 0 19.8 60.9 114.7 40.3v63.5c0 9-5.5 19.6-22.5 16.4c-135.7-45.1-233.5-173.1-233.5-323.8c0-188.5 152.8-341.3 341.3-341.3s341.3 152.8 341.3 341.3c0 150.7-97.7 278.7-233.2 323.8z',
  youtube = 'M426.7 398.2l227.5 113.6l-227.5 114v-227.6zm597.3-184.9v597.3c0 117.8-95.5 213.3-213.3 213.3h-597.3c-117.8 0-213.3-95.5-213.3-213.3v-597.3c0-117.8 95.5-213.3 213.3-213.3h597.3c117.8 0 213.3 95.5 213.3 213.3zm-170.7 298.7c-.9-175.9-13.8-243.2-124.7-250.8c-102.5-7-330.8-7-433.2 0c-110.8 7.6-123.9 74.5-124.8 250.8c.9 175.9 13.8 243.2 124.7 250.8c102.4 7 330.7 7 433.2 0c110.8-7.6 123.9-74.5 124.8-250.8z',
  /** I made these myself */
  menu = 'M64 288A1 1 0 0164 224H960A1 1 0 01960 288H64ZM64 800A1 1 0 0164 736H960A1 1 0 01960 800H64ZM64 544A1 1 0 0164 480H960A1 1 0 01960 544H64Z',
  arrow = 'M480 992a1 1 0 0064 0V96l384 384a1 1 0 0045.3-45.3l-384-384C544 0 480 0 434.7 50.7l-384 384A1 1 0 0096 480l384-384Z',
  cross = 'M128 0L0 128l384 384L0 896l128 128L512 640l384 384L1024 896L640 512L1024 128L896 0L512 384Z',
}

// TODO implement icon label as figcaption lol
export const IconWrapper = styled.figure`
  ${tw`relative inline-block flex-none m-0.5`}
  ${({ orientation }: { orientation?: number; href?: string }) =>
    css`
      transform: rotate(${orientation ?? 0}deg);
    `}
`

export type IconProps = (
  | ({ orientation?: number } & Omit<ImageProps, 'height' | 'width' | 'layout'>)
  | ({ icon: ICON } & OrientableSVG)
) & {
  as?: keyof JSX.IntrinsicElements
  href?: string
  label?: string
  labelStyle?: SerializedStyles
}
/** Must restyle with height and width. Either specify icon which is enum ICON or src which is path. */
export function Icon({
  orientation,
  className,
  href,
  as,
  label,
  labelStyle,
  onClick,
  ...props
}: IconProps) {
  return (
    <IconWrapper
      as={as}
      className={`${className} group`}
      orientation={orientation}
      href={href}
      onClick={onClick as any}
    >
      {'src' in props ? (
        <Image layout='fill' {...props} />
      ) : (
        <svg viewBox='0 0 1024 1024' {...props}>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            fill='currentColor'
            d={props.icon}
          />
        </svg>
      )}
      <figcaption css={labelStyle}>{label}</figcaption>
    </IconWrapper>
  )
}
