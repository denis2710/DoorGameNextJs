import tw from "tailwind-styled-components"

export const Container = tw.div`
  flex
  flex-col
  justify-center
  gap-3
  
  pt-7

`
export const DoorsArea = tw.div`
  flex
  flex-wrap
  flex-row
  align-items
  justify-center 

  mb-40
  
`

export const StatusMessageArea = tw.div`
  flex
  flex-1
  items-center
  justify-center
`
export const ResetArea = tw.div`
  flex
  justify-center
  items-center
  flex-col
  gap-4

  
  bg-gray-900
  bottom-0
  w-full
  p-4
  fixed
  z-40

`
