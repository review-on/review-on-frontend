import * as React from "react"

const MovieIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={25}
      viewBox="0 0 34 34"
      {...props}
    >
      <defs>
        <clipPath id="prefix__a">
          <path data-name="\uC0AC\uAC01\uD615 294" d="M0 0h34v34H0z" />
        </clipPath>
      </defs>
      <g data-name="\uADF8\uB8F9 67" clipPath="url(#prefix__a)">
        <path
          data-name="\uD328\uC2A4 222"
          d="M26.842 0H7.064A7.072 7.072 0 000 7.064v19.778a7.072 7.072 0 007.064 7.064h19.778a7.072 7.072 0 007.064-7.064V7.064A7.072 7.072 0 0026.842 0zm1.413 15.54h2.825v2.825h-2.826zm0-2.825V9.889h2.825v2.825zm-2.826 2.825H8.476V2.825h16.953zM5.651 18.365H2.825V15.54h2.826zm0-5.651H2.825V9.889h2.826zm-2.826 8.477h2.826v2.825H2.825zm5.651-2.825h16.953V31.08H8.476zm19.778 2.825h2.826v2.825h-2.826zM31.08 7.064h-2.826V3.085a4.238 4.238 0 012.826 3.979zM5.651 3.085v3.979H2.825a4.238 4.238 0 012.826-3.979zM2.825 26.842h2.826v3.978a4.238 4.238 0 01-2.825-3.978zm25.429 3.978v-3.978h2.826a4.238 4.238 0 01-2.825 3.978z"
        />
      </g>
    </svg>
  )
}

export default MovieIcon;
