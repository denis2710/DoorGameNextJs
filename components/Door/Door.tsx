import { DoorModel } from "../../model/door"
import { Gift } from "../Gift"
import { Container, DoorArea, Floor, Frame, Handle, Number, DoorInside } from "./Door.styles"

interface DoorProps {
  door: DoorModel
  onOpen: () => void
  onSelect: () => void
}


const Door = ({door, onOpen, onSelect}: DoorProps) => { 

  return(
    <Container>
      <Frame selected={door.selected} >
        {!door.opened && (
          <DoorArea onClick={onSelect}>
            <Number selected={door.selected}>{door.number}</Number>
            <Handle onClick={onOpen} selected={door.selected}/>
          </DoorArea>
        )}
        {door.opened && door.hasGift && (
          <Gift />
        )}
        
        <DoorInside />
      </Frame>
      <Floor />
    </Container>
  )
}

export { Door }