import tw from "tailwind-styled-components";

export const Container = tw.div`
  text-slate-700
  flex
  flex-col
  w-full
  h-full
  text-center
  border-2
`
export const ContentArea = tw.div`
  flex
  flex-col
  w-full
  h-full
  p-3

  
  ${p => p.$isDisabled ? 'opacity-50': ''}
`

export const Title = tw.div`
  text-sm
  flex
  justify-center
  
`
export const Value = tw.div`
  text-4xl
  font-bold
  flex
  flex-1
  justify-center
  items-center
  text-shadow
`
export const Button = tw.button`
  w-10
  h-10

  items-center
  justify-center


  bg-gray-200
  shadow-black/20
  transition-all

  cursor-default

  ${p => {
    if(!p.$disabled) {
      return `
        hover:bg-gray-300

        active:shadow-black/20
        active:shadow-inner   
        cursor-pointer

      `
    }
  }}
 


`
export const ButtonArea = tw.button`
  flex
  gap-1
  items-center
  justify-center
`
export const DisableArea = tw.div`
  flex
  gap-1
  items-center
  bg-slate-100
  p-1
`
export const DisableMessage = tw.label`
  text-xs
`
