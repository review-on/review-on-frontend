import * as React from "react"

const Logo = (props) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={150}
      height={25}
      viewBox="0 0 176 39"
      {...props}
    >
      <text
        transform="translate(0 29)"
        fontSize={32}
        fontFamily="AppleSDGothicNeoH00"
      >
        <tspan x={0} y={0}>
          {"REVIEW:ON"}
        </tspan>
      </text>
    </svg>
  )
}

export default Logo 
