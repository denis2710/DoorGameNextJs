import tw from "tailwind-styled-components";

export const Container = tw.div`
  flex
  h-40
  w-40
  items-center
  transition-all
  ease-linear
  
  ${p => {
    switch (p.color){
      case 'red': 
        return 'bg-red-700'
      case 'green': 
        return 'bg-emerald-700'
      case 'white': 
        return 'bg-white'
    }
  }}


  

  ${p => {
    if(p.$clicable){
      let clicableProps = 'cursor-pointer '
      switch (p.color){
        case 'red': 
          return clicableProps + 'hover:bg-red-900'
        case 'green': 
          return clicableProps + 'hover:bg-emerald-800'
        case 'white': 
          return clicableProps + 'bg-white'
      }

    }
  }}

  ${p => {
    switch (p.size){
      case 'small': 
        return 'text-xl font-bold'
      case 'medium': 
        return 'text-2xl font-bold'
      case 'large': 
        return ' text-4xl font-bold'
    }
  }}

  ${p => p.$center ? 'justify-center' : ''}
  ${p => p.$noPadding ? '' : 'p-3'}
`