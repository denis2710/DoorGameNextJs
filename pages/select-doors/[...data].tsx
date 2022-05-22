import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { Door } from '../../components/Door'
import { createDoors } from '../../functions/portas'
import { DoorModel } from '../../model/door'
import { Container, DoorsArea, ResetArea } from '../../styles/selectDoors.styles'

export default function SelectDoors() {
  const router = useRouter()

  const [doors, setDoors] = useState<DoorModel[]>([])
  const [atempt, setAtempt] = useState(1)


  useEffect(() => {

    let qtd = 0
    let selected = 0
    let doorsCreated = []
    
    if(router?.query?.data){
 
      qtd = +router?.query?.data[0]
      selected = +router?.query?.data[1] || undefined
      doorsCreated = createDoors({qtd, selected})
      
    }

    setDoors(doorsCreated)
   
  }, [router?.query])

  function selectDoor(door: DoorModel){
    const newDoors = [...doors]; 

    newDoors.map(d => (
      d.selected = door.number === d.number  
    ))

    setDoors(newDoors)
  }

  function openDoor(door: DoorModel) {

    if(!door.selected){ 
      return selectDoor(door)
    }

    const newDoors = [...doors]; 
    
    newDoors.map(d => {
      if(door.number === d.number){ 
        d.selected = false;
        d.opened = true;
      }
    })

    setDoors(newDoors)
    setAtempt(atempt+1)

    if(door.hasGift){
      console.log(`You won with ${atempt} atempts!`)
    }

  }

  return (
    <Container >
      <DoorsArea>
        {doors.map(door => 
          <Door 
            key={door.number}
            onOpen={() => openDoor(door) }
            onSelect={() =>  selectDoor(door)}
            door={door}
          />
        )}
      </DoorsArea>
      <ResetArea>
          <Button onClick={() => router.push("/game")}>Reset Game</Button>
      </ResetArea>
    </Container>
  )
}
