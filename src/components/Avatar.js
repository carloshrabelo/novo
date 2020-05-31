import React from "react"

export default ({ src }) => (
  <svg width="100%" viewBox="0 0 84 84">
    <g>
      <clipPath id="hex-mask">
        <path d="M0 27.2891c0-4.6662 2.4889-8.976 6.52491-11.2986L31.308 1.72845c3.98-2.290382 8.8697-2.305446 12.8637-.03963l25.234 14.31558C73.4807 18.3162 76 22.6478 76 27.3426V56.684c0 4.6805-2.5041 9.0013-6.5597 11.3186L44.4317 82.2915c-3.9869 2.278-8.8765 2.278-12.8634 0L6.55974 68.0026C2.50414 65.6853 0 61.3645 0 56.684V27.2891z"></path>
      </clipPath>
    </g>
    <image
      clipPath="url(#hex-mask)"
      height="100%"
      width="100%"
      transform="scale(0.9) translate(5, 5)"
      xlinkHref={src}
      preserveAspectRatio="xMidYMin slice"
    />
  </svg>
)
