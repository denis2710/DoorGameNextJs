import tw from "tailwind-styled-components";

export const Container = tw.div`
  relative
  flex
  flex-col
  items-center
  z-10
`

export const Top = tw.div`  
  w-32
  h-6
  bg-lime-600
`

export const Box = tw.div`
  w-28
  h-16
  bg-lime-700
`

export const Teal1 = tw.div`
  absolute
  w-4
  h-[88px]
  bg-red-500
  opacity-80
`

export const Teal2 = tw.div`
  absolute
  h-4
  w-28
  top-10
  bg-red-500
  opacity-80
`