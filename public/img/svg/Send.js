export const Send = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="82" viewBox="0 0 84 82" {...props}>
      <defs>
        <filter id="send-a" width="164.8%" height="171.4%" x="-32.4%" y="-35.7%" filterUnits="objectBoundingBox">
          <feOffset dy="5" in="SourceAlpha" result="shadowOffsetOuter1"/>
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"/>
          <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.163051792 0"/>
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g fill="none" fill-rule="evenodd" transform="translate(-597 -184)">
        <line x1="7" x2="7.5" y1="8.633" y2="1117.5" stroke="#E9E9E9" stroke-linecap="square" transform="rotate(-90 154.5 72.5)"/>
        <rect width="1280" height="632" fill="#FFF"/>
        <g transform="translate(599 184)">
          <circle cx="41" cy="41" r="41" fill="#E9E9E9"/>
          <g filter="url(#send-a)" transform="translate(11 17)">
            <polygon fill="#EAEAEA" points="10.5 34.16 16.862 47.469 16.831 39.172 54 0"/>
            <polygon fill="#D0D3D4" points="16.5 39.047 16.5 47.469 21.75 41.8"/>
            <polygon fill="#FFF" points="16.5 39.386 35.464 49 54 0"/>
            <polygon fill="#FFF" points="10.338 34.453 54 0 0 27.446"/>
          </g>
        </g>
      </g>
    </svg>
  )
}