import { DefaultButton } from "./Button.styles"

interface ButtonParams { 
  onClick: () => any;
  children: any;
}


const Button = ({onClick, children}: ButtonParams) => {

  return (
    <DefaultButton onClick={onClick}>
        {children}
    </DefaultButton>
  )

}

export {Button}