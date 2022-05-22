import tw from "tailwind-styled-components";

export const Container = tw.div`
  flex
  flex-col
  w-52
  min-2-52
  h-80
  items-center
  m-1
`

export const Frame = tw.div`

  flex
  flex-grow
  flex-col-reverse
  
  border-l-8
  border-t-8
  border-r-8
  w-11/12

  relative



  ${(p) => p.selected ? 'border-yellow-400' : 'border-amber-900' }

`

export const DoorArea = tw.div`
  flex
  flex-col
  flex-grow
  absolute
  z-20
  w-full
  h-full


  bg-amber-700
  items-center
  p-4
  
`


export const Handle = tw.div`
  w-5
  h-5
  

  
  shadow-md
  shadow-gray-900/50
  rounded-full

  absolute
  top-2/4

  flex
  self-start  

  ${(p) => p.selected ? 'bg-yellow-400' : 'bg-white'}

`
export const Number = tw.div`
  text-5xl
  
  

  ${(p) => p.selected ? 'text-yellow-400' : 'text-white'}
`


export const DoorInside = tw.div`
  bg-gray-800

  
  flex-grow
  absolute
  
  w-full
  h-full


 
`
export const Floor = tw.div`
  h-3
  w-full
  bg-white
`