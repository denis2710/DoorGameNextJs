import { useState } from "react"
import { Button, ButtonArea, Container, ContentArea, DisableArea, DisableMessage, Title, Value } from "./Counter.styles"

interface CounterProps {
  title: string
  currentValue: number
  onAdd: () => void
  onSub: () => void
  mayDisable?: boolean
  disableMessage?: string
  onDisable?: () => void
  onEnable?: () => void
}

const Counter = ({title, currentValue, onAdd, onSub, mayDisable, disableMessage, onDisable, onEnable}:CounterProps) => {
  const [isDisabled, setIsDisabled] = useState(false);

  function toggleEnable(){
    if(isDisabled){
      onEnable()    
    } else { 
      onDisable()
    }
    setIsDisabled(!isDisabled);
  }

  return(
    <Container>
        {mayDisable && (
          <DisableArea>
            <input id="disableButton" type="checkbox" onChange={() => toggleEnable() } />
            <DisableMessage htmlFor="disableButton" >{disableMessage}</DisableMessage>
          </DisableArea>
        )}
        <ContentArea $isDisabled={isDisabled}>
          <Title>{title}</Title>
          <Value>{currentValue || '?'}</Value>
          <ButtonArea>
            <Button $disabled={isDisabled} onClick={() => isDisabled? null : onSub()}>-</Button>
            <Button $disabled={isDisabled} onClick={() => isDisabled? null : onAdd()}>+</Button>
          </ButtonArea>
        </ContentArea>

    </Container>
  )
}

export {Counter}

