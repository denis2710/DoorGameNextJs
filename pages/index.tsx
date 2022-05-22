import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { Counter } from '../components/Counter'
import { Door } from '../components/Door'
import { Grid } from '../components/Grid'
import { GridItem } from '../components/GridItem'
import { createDoors } from '../functions/portas'
import { DoorModel } from '../model/door'
import { Container } from '../styles/Game.styles'

export default function Game() {
  const router = useRouter()
  const [qtdDoors, setQteDoors] =useState(1)
  const [giftDoor, setGiftDoor] =useState<number | undefined>(1)

  function getDoorsPath(){
    return `/select-doors/${qtdDoors}/` + (giftDoor || '') 
  }

  function addValue(currentValue: number, setFunction: Dispatch<SetStateAction<number>>, limit = undefined) { 

    if(!currentValue){
      return setFunction(1)
    }

    
    if(limit && currentValue >= limit) { 
       return setFunction(limit)
    }

    

    return setFunction(currentValue + 1)

  }

  function subValue(currentValue: number, setFunction: Dispatch<SetStateAction<number>>){ 
    if(currentValue > 1){
      setFunction(currentValue - 1)
    }
  }

  return (
    <Container >
      <Grid>
        <GridItem color="red" size="large" >Monty Hall</GridItem>
        <GridItem color="white" noPadding={true} >
          <Counter
            title="Quantity of Doors:"
            currentValue={qtdDoors}
            onAdd={()=> addValue(qtdDoors, setQteDoors)}
            onSub={()=> subValue(qtdDoors, setQteDoors)}
          />
        </GridItem>
        <GridItem color="white" noPadding={true}>
          <Counter
            title="Door with Gift"
            currentValue={giftDoor}
            onAdd={()=> addValue(giftDoor, setGiftDoor, qtdDoors)}
            onSub={()=> subValue(giftDoor, setGiftDoor)}
            onDisable={() => setGiftDoor(undefined)}
            onEnable={() => setGiftDoor(1)}
            mayDisable={true}
            disableMessage="Choose a random door"
          />        
        </GridItem>
        <GridItem color="green"  size="medium" center={true}  onClick={() => router.push(getDoorsPath())}>Iniciar</GridItem>

      </Grid>
      
    </Container>
  )
}
