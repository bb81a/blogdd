'use client'

import { useState } from 'react'

export default function ThemeSwitch() {
  const [isDarkTheme, setDarkTheme] = useState(false)

  return (
    <button
      className="rounded-full border border-slate-300"
      onClick={() => setDarkTheme((t) => !t)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width={48} height={24}>
        <mask
          id="a"
          width={48}
          height={24}
          x={0}
          y={0}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: 'alpha',
          }}
        >
          <rect width={48} height={24} fill="#fff" rx={12} />
        </mask>
        <g mask="url(#a)">
          <rect
            width="100%"
            height="100%"
            rx={0}
            ry={0}
            className={`${isDarkTheme ? 'fill-[#475569]' : 'fill-[#7DD3FC]'}`}
          />
          <circle
            cx={32}
            cy={12}
            r={16}
            className={`${
              isDarkTheme
                ? 'translate-x-[-16px] fill-[#475569]'
                : 'translate-x-0 fill-[#7DD3FC]'
            } duration-200`}
          />
          <circle
            cx={24}
            cy={12}
            r={16}
            className={`${
              isDarkTheme
                ? 'translate-x-0 fill-[#334155]'
                : 'translate-x-0 fill-[#38BDF8]'
            } duration-200`}
          />
          <circle
            cx={16}
            cy={12}
            r={16}
            className={`${
              isDarkTheme
                ? 'translate-x-[16px] fill-[#1E293B]'
                : 'translate-x-0 fill-[#0EA5E9]'
            } duration-200`}
          />
          <circle
            cx={12}
            cy={12}
            r={10}
            className={`${
              isDarkTheme
                ? '-rotate-180 fill-[#FDE68A]'
                : 'rotate-0 fill-[#FCD34D]'
            } origin-center duration-300`}
          />
          <circle
            cx="33"
            cy="8"
            r="4"
            className={`${
              isDarkTheme ? 'fill-[#FCD34D]' : 'fill-none'
            } duration-300 delay-300`}
          />
          <circle
            cx="40"
            cy="16"
            r="3"
            className={`${
              isDarkTheme ? 'fill-[#FCD34D]' : 'fill-none'
            } duration-300 delay-300`}
          />
          <g
            className={`${
              isDarkTheme ? 'translate-y-[32px]' : 'translate-y-0'
            } duration-200 delay-100`}
          >
            <circle cx={27} cy={25} r={6} fill="#fff" />
            <circle cx={33} cy={21} r={4} fill="#fff" />
            <circle cx={39} cy={23} r={4} fill="#fff" />
            <circle cx={44} cy={18} r={4} fill="#fff" />
            <circle cx={50} cy={13} r={6} fill="#fff" />
          </g>
          <g
            className={`${
              isDarkTheme ? 'translate-y-0' : 'translate-y-[-32px]'
            } duration-200 delay-100`}
          >
            <path
              d="M6 9L6.89806 11.7639H9.80423L7.45308 13.4721L8.35114 16.2361L6 14.5279L3.64886 16.2361L4.54692 13.4721L2.19577 11.7639H5.10194L6 9Z"
              fill="#fff"
            />
            <path
              d="M12 -3L12.8981 -0.236068H15.8042L13.4531 1.47214L14.3511 4.23607L12 2.52786L9.64886 4.23607L10.5469 1.47214L8.19577 -0.236068H11.1019L12 -3Z"
              fill="#fff"
            />
            <path
              d="M19 20L19.6735 22.0729H21.8532L20.0898 23.3541L20.7634 25.4271L19 24.1459L17.2366 25.4271L17.9102 23.3541L16.1468 22.0729H18.3265L19 20Z"
              fill="#fff"
            />
            <path
              d="M20 7L20.449 8.38197H21.9021L20.7265 9.23607L21.1756 10.618L20 9.76393L18.8244 10.618L19.2735 9.23607L18.0979 8.38197H19.551L20 7Z"
              fill="#fff"
            />
          </g>
        </g>
      </svg>
    </button>
  )
}
