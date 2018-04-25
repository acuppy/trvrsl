// @flow
import React from 'react'
import styled from 'react-emotion'

export default undefined

type Props = {
  width?: number,
  height?: number,
}

type TitleProps = {
  title: string,
} & Props

// -------------------------------------

export const ArrowIcon = ({ title, ...props }: TitleProps) => (
  <svg viewBox="0 0 19 18" {...props}>
    <title>{title}</title>
    <g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="10.5333333 1 18 9 10.5333333 17" />
      <path d="M18,9 L0.970613634,9" />
    </g>
  </svg>
)

ArrowIcon.defaultProps = {
  width: 19,
  height: 18,
}

// -------------------------------------

export const CalendarIcon = ({ ...props }: Props) => (
  <svg viewBox="0 0 32 32" {...props}>
    <title>Schedule</title>
    <defs>
      <linearGradient x1="60%" y1="0%" x2="45%" y2="100%" id="CalendarGradient">
        <stop stopColor="#ff0092" offset="0%" />
        <stop stopColor="#d800ff" offset="100%" />
      </linearGradient>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path fill="url(#CalendarGradient)" d="M26,21 L26,23 C26,23.552 25.553,24 25,24 L23,24 C22.447,24 22,23.552 22,23 L22,21 C22,20.448 22.447,20 23,20 L25,20 C25.553,20 26,20.448 26,21 Z M18,21 L18,23 C18,23.552 17.553,24 17,24 L15,24 C14.447,24 14,23.552 14,23 L14,21 C14,20.448 14.447,20 15,20 L17,20 C17.553,20 18,20.448 18,21 Z M10,21 L10,23 C10,23.552 9.553,24 9,24 L7,24 C6.447,24 6,23.552 6,23 L6,21 C6,20.448 6.447,20 7,20 L9,20 C9.553,20 10,20.448 10,21 Z M23,12 L25,12 C25.553,12 26,12.448 26,13 L26,15 C26,15.552 25.553,16 25,16 L23,16 C22.447,16 22,15.552 22,15 L22,13 C22,12.448 22.447,12 23,12 Z M18,13 L18,15 C18,15.552 17.553,16 17,16 L15,16 C14.447,16 14,15.552 14,15 L14,13 C14,12.448 14.447,12 15,12 L17,12 C17.553,12 18,12.448 18,13 Z M10,13 L10,15 C10,15.552 9.553,16 9,16 L7,16 C6.447,16 6,15.552 6,15 L6,13 C6,12.448 6.447,12 7,12 L9,12 C9.553,12 10,12.448 10,13 Z M30,30 L2,30 L2,5 L10,5 L10,6 C10,6.552 10.447,7 11,7 C11.553,7 12,6.552 12,6 L12,5 L20,5 L20,6 C20,6.552 20.447,7 21,7 C21.553,7 22,6.552 22,6 L22,5 L30,5 L30,30 Z M30,3 L22,3 L22,1 C22,0.448 21.553,0 21,0 C20.447,0 20,0.448 20,1 L20,3 L12,3 L12,1 C12,0.448 11.553,0 11,0 C10.447,0 10,0.448 10,1 L10,3 L2,3 C0.897,3 0,3.897 0,5 L0,30 C0,31.103 0.897,32 2,32 L30,32 C31.103,32 32,31.103 32,30 L32,5 C32,3.897 31.103,3 30,3 Z" />
    </g>
  </svg>
)

CalendarIcon.defaultProps = {
  width: 32,
  height: 32,
}


// -------------------------------------

export const LogoShape = ({ width, height, ...props }: Props) => (
  <svg viewBox="0 0 299.36 155.14" width={width} height={height} {...props}>
    <title>Home</title>
    <defs>
      <clipPath id={`LogoShapeClipPath${width + height}`}>
        <path fill="none" d="M297.28,127.19h0L208.2,1.57h0a.47.47,0,0,0-.34-.2.49.49,0,0,0-.51.27h0l-28.29,55.6L159.6,50.31h0l-.07,0h-.24l-.07,0,0,0h0l-24,20.95L115.69,49.23l0,0s0,0,0,0h0l0,0h0l-.07,0,0,0h-.25a.15.15,0,0,0-.07,0l-.06,0h0l0,0h0s0,0,0,0l0,0-9,11.4L60.68,11.31l0,0,0,0,0,0,0,0h0l-.05,0,0,0h-.21l0,0h0l-.06,0,0,0,0,0,0,0h0l0,0a.08.08,0,0,1,0,0l0,0,0,0L1.38,128.36a.5.5,0,0,0,.23.67.54.54,0,0,0,.21.05h0l29.65.44,51,9h0l.09,0h.1l37.58-7.65,11.6-1.29,11.81-.92,0-.5.05.5,11.5-1.28,34.78,15.79h0a.37.37,0,0,0,.14,0h.07l38.79.07h.05a.37.37,0,0,0,.14,0h0L266.38,128h30.5a.51.51,0,0,0,.36-.15A.49.49,0,0,0,297.28,127.19Zm-118.68-69-9,17.71-9.3-24.24Zm-19.26-6.22,9.56,24.94A.45.45,0,0,0,169,77l-4.53,8.91-21.64-6.08ZM164,86.81l-9.79,19.25L143,80.9Zm-6.58-33.62L142,79.28l-6.28-7.18ZM134.64,72.38h0l7,8,12,26.81-.45.87L119.27,54.83ZM105.31,61.44,83.67,88.9,75.11,93l-14-79.75ZM31.12,128.52l-28.49-.43L58.76,15.86ZM60.23,14.07l14,79.45L32.36,127.69ZM32.68,128.72,74.39,94.65l7.5,42.72Zm50.23,8.67L75.29,94l8.57-4.1L119.17,130Zm37.41-7.58L84.64,89.28,115,50.71l16.1,77.9Zm22.92-2.17-11.1.87L116.36,52.12l36.31,57Zm11.6-1.28-10.42,1.16L202,14.43Zm34.85,15.58-33.85-15.37,51-121.16Zm1,.21,17.46-139,85.23,120.17L221.62,54h0l0,0h0l-.07,0h0l-.06,0h-.24l-.06,0-.08,0h0l0,0,0,0-.05,0h0l0,0h0l0,.07s0,.05,0,.07v0h0l-25.51,87.74Zm5.57,0L221,57l7.34,85.21Zm33.09-.16L222,56.46l22.21,37.47h0l21.36,33.29ZM266.56,127,245,93.41,223.6,57.27l72,69.7Z" />
      </clipPath>
      <linearGradient id={`LogoShapeLinearGradient${width + height}`} x1="-0.28" y1="137.44" x2="305.06" y2="55.62" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#ff0a90" />
        <stop offset="1" stopColor="aqua" />
      </linearGradient>
    </defs>
    <g clipPath={`url(#LogoShapeClipPath${width + height})`}>
      <rect fill={`url(#LogoShapeLinearGradient${width + height})`} width="298.7" height="194.7" />
    </g>
  </svg>
)

LogoShape.defaultProps = {
  width: 300,
  height: 156,
}

// -------------------------------------

export const LogoType = ({ ...props }: Props) => (
  <svg viewBox="0 0 299.36 51.5" {...props}>
    <title>Trvrsl</title>
    <defs>
      <clipPath id="LogoTypeClipPath">
        <path fill="none" d="M43.64,16.5H62v3.87H55.23v17.8h-4.8V20.37H43.64ZM98.48,31.44l2.61,6.73h-5L93.3,31a2.07,2.07,0,0,0-1-1.19,3.92,3.92,0,0,0-1.71-.33H87.49v8.73H82.8V16.5h9.65a8.63,8.63,0,0,1,5.72,1.65,5.8,5.8,0,0,1,2,4.71A6.13,6.13,0,0,1,99,26.58a6.27,6.27,0,0,1-3.27,2.22A3.76,3.76,0,0,1,98.48,31.44ZM95.68,23a2.47,2.47,0,0,0-1-2.14,5.08,5.08,0,0,0-3-.69H87.43v5.66h4.32a5.08,5.08,0,0,0,3-.68A2.48,2.48,0,0,0,95.68,23Zm35.5,9.26L124.43,16.5H119.5l9.74,21.67H133l9.74-21.67H138Zm47.23-.8L181,38.17h-5L173.24,31a2.07,2.07,0,0,0-1-1.19,4,4,0,0,0-1.72-.33h-3.07v8.73h-4.69V16.5h9.65a8.65,8.65,0,0,1,5.72,1.65,5.8,5.8,0,0,1,1.95,4.71,6.13,6.13,0,0,1-1.14,3.72,6.3,6.3,0,0,1-3.28,2.22A3.75,3.75,0,0,1,178.41,31.44ZM175.61,23a2.47,2.47,0,0,0-.94-2.14,5.1,5.1,0,0,0-3-.69h-4.32v5.66h4.32a5.1,5.1,0,0,0,3-.68A2.47,2.47,0,0,0,175.61,23Zm41.5,4.87a15.22,15.22,0,0,0-6-2.37,16.55,16.55,0,0,1-2.77-.75,3.5,3.5,0,0,1-1.39-.86,1.85,1.85,0,0,1-.41-1.22,2.28,2.28,0,0,1,1.1-2,5.24,5.24,0,0,1,2.92-.73,10.14,10.14,0,0,1,6.3,2.19l1.52-3.41A9,9,0,0,0,215,16.9a14.61,14.61,0,0,0-4.44-.67,10.92,10.92,0,0,0-4.5.87,7,7,0,0,0-3,2.42,6,6,0,0,0-1.08,3.5,5.47,5.47,0,0,0,.77,3,6,6,0,0,0,2.47,2,18.89,18.89,0,0,0,4.55,1.42,13,13,0,0,1,3.57,1.14,1.81,1.81,0,0,1,1,1.63,2,2,0,0,1-1.11,1.84,6.4,6.4,0,0,1-3.18.65,11.93,11.93,0,0,1-7-2.19L201.48,36a10.83,10.83,0,0,0,3.76,1.84,16.83,16.83,0,0,0,4.73.65,10.82,10.82,0,0,0,6.61-1.78A5.7,5.7,0,0,0,219,31.84,4.85,4.85,0,0,0,217.11,27.85Zm28.28,6.46V16.5h-4.74V38.17h14.42V34.31Z" />
      </clipPath>
      <linearGradient id="LogoTypeLinearGradient" x1="-0.28" y1="-17.7" x2="305.06" y2="-99.51" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#ff0a90" />
        <stop offset="1" stopColor="aqua" />
      </linearGradient>
    </defs>
    <g clipPath="url(#LogoTypeClipPath)">
      <rect fill="url(#LogoTypeLinearGradient)" y="-155.14" width="298.7" height="194.7" />
    </g>
  </svg>
)

LogoType.defaultProps = {
  width: 300,
  height: 52,
}

// -------------------------------------

const LogoShapeAndType = styled.span({
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Logo = () => (
  <LogoShapeAndType>
    <LogoShape />
    <LogoType style={{ marginTop: '0.5rem' }} />
  </LogoShapeAndType>
)
// -------------------------------------

export const MapIcon = ({ ...props }: Props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <title>Map/Location</title>
    <g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(1.000000, 1.000000)">
      <path d="M0,5.484 C0,10.3155 5.48351648,15 5.48351648,15 C5.48351648,15 11,10.3155 11,5.484 C11,2.454 8.76295133,0 5.48351648,0 C2.20408163,0 0,2.454 0,5.484 Z" />
      <path d="M30.6666667,40 L8.349,40 C3.73826667,40 0,36.2321818 0,31.585 L0,31.415 C0,26.7662727 3.73826667,23 8.349,23 L37.651,23 C42.2617333,23 46,19.2321818 46,14.585 L46,14.415 C46,9.76781818 42.2617333,6 37.651,6 L16.8666667,6" />
      <path d="M46,46 L34,34" />
      <path d="M34,46 L46,34" />
    </g>
  </svg>
)

MapIcon.defaultProps = {
  width: 48,
  height: 48,
}

// -------------------------------------

export const MenuIcon = ({ ...props }: Props) => (
  <svg viewBox="0 0 39 25" {...props}>
    <title>Menu</title>
    <g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(1.000000, 1.000000)">
      <path d="M0,0 L36.2999992,0" />
      <path d="M0,11.4782609 L36.2999992,11.4782609" />
      <path d="M0,22.9565217 L36.2999992,22.9565217" />
    </g>
  </svg>
)

MenuIcon.defaultProps = {
  width: 39,
  height: 25,
}

// -------------------------------------

export const TwitterIcon = ({ ...props }: Props) => (
  <svg viewBox="0 0 30 24" {...props}>
    <title>Twitter</title>
    <g stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
      <path d="M19.3971746,0 C15.8267131,0 13.06579,2.54215385 12.6504054,6.048 C9.68825153,5.45076923 6.99378999,3.88061538 5.05809768,1.57938462 C4.7054823,1.16030769 4.18763614,0.921230769 3.64578999,0.921230769 C3.59778999,0.921230769 3.54886691,0.923076923 3.49994384,0.926769231 C2.90640537,0.973846154 2.37194384,1.30430769 2.06455922,1.81476923 C1.42117461,2.88184615 1.0814823,4.10492308 1.0814823,5.35292308 C1.0814823,6.18461538 1.23102076,6.99507692 1.51440537,7.75384615 C1.21255922,8.08892308 1.03809768,8.52738462 1.03809768,8.99076923 L1.03809768,9.05815385 C1.03809768,10.8655385 1.7534823,12.5436923 2.94055922,13.8018462 C2.87225153,14.1175385 2.88702076,14.4507692 2.99225153,14.7673846 C3.40209768,16.0135385 4.14702076,17.0870769 5.11255922,17.904 C4.46363614,18.048 3.79440537,18.1209231 3.1094823,18.1209231 C2.74855922,18.1209231 2.39871307,18.1006154 2.07009768,18.06 C1.9934823,18.0516923 1.91871307,18.0470769 1.84486691,18.0470769 C1.07040537,18.0470769 0.367943836,18.5335385 0.10578999,19.2793846 C-0.183133087,20.0963077 0.135328452,21.0027692 0.871020759,21.4596923 C3.50086691,23.0981538 6.80178999,24 10.1664054,24 C16.5190208,24 20.4633285,21.0867692 22.65379,18.6415385 C25.3104054,15.6766154 26.8565592,11.7406154 26.9165592,7.80461538 C27.7787131,7.09107692 28.5374823,6.26769231 29.18179,5.34738462 C29.4153285,5.03815385 29.55379,4.65323077 29.55379,4.23692308 C29.55379,3.60830769 29.2399438,3.05353846 28.76179,2.71938462 C28.9685592,2.00861538 28.7313285,1.23876923 28.1525592,0.769846154 C27.8165592,0.495692308 27.4039438,0.356307692 26.9894823,0.356307692 C26.6719438,0.356307692 26.3525592,0.438461538 26.0664054,0.603692308 C25.4488669,0.96 24.7879438,1.24061538 24.0919438,1.44184615 C22.8144054,0.546461538 21.0799438,0 19.3971746,0 M27.7048669,4.23692308 L27.7094823,4.23692308 M19.3971746,1.84615385 C20.9220977,1.84615385 22.6528669,2.448 23.6230208,3.45046154 C24.8294823,3.21784615 25.9667131,2.79230769 26.9894823,2.20246154 C26.5944054,3.40430769 25.7525592,4.41138462 24.65779,5.04830769 C25.7285592,4.92184615 26.7550208,4.64769231 27.7048669,4.23692308 C26.9931746,5.268 26.0950208,6.17446154 25.0584054,6.90184615 C25.0676361,7.12153846 25.0722515,7.34307692 25.0722515,7.56461538 C25.0722515,14.3658462 19.9251746,22.1538462 10.1664054,22.1538462 C7.17194384,22.1538462 4.19132845,21.3535385 1.84578999,19.8932308 C2.26117461,19.9430769 2.68302076,19.9670769 3.1094823,19.9670769 C5.59625153,19.9670769 7.88363614,19.1446154 9.70117461,17.7618462 C7.37778999,17.7221538 5.41717461,16.2332308 4.74517461,14.1904615 C5.06825153,14.2504615 5.4014823,14.2827692 5.74394384,14.2827692 C6.22486691,14.2827692 6.69563614,14.2209231 7.13963614,14.1018462 C4.71286691,13.632 2.88425153,11.5513846 2.88425153,9.05815385 L2.88425153,8.99076923 C3.60055922,9.37661538 4.41655922,9.60923077 5.28794384,9.636 C3.86363614,8.712 2.92763614,7.13907692 2.92763614,5.35292308 C2.92763614,4.40953846 3.18886691,3.52430769 3.64578999,2.76738462 C6.26178999,5.87723077 10.1719438,7.92738462 14.5814823,8.14338462 C14.4900977,7.76676923 14.4430208,7.36984615 14.4430208,6.972 C14.4430208,4.12892308 16.4654823,1.84615385 19.3971746,1.84615385" />
    </g>
  </svg>
)

TwitterIcon.defaultProps = {
  width: 30,
  height: 24,
}

// -------------------------------------

export const XIcon = ({ ...props }: Props) => (
  <svg viewBox="0 0 26 26" {...props}>
    <title>Dismiss</title>
    <g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(1.000000, 1.000000)">
      <path d="M23.9984,0 L0,24" />
      <path d="M24,24 L0,0" />
    </g>
  </svg>
)

XIcon.defaultProps = {
  width: 26,
  height: 26,
}
