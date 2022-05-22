import { DoorModel } from "../model/door";

export function createDoors({qtd, selected}: {qtd: number, selected?: number}): DoorModel[]{
  const doorSelected = selected || Math.round(Math.random() * (qtd - 1) + 1);
  const doorsCreated: DoorModel[] = [];

  for (let i = 1; i <= qtd; i++){
    doorsCreated.push(
      new DoorModel(i, i===doorSelected),
    )
  }

  return doorsCreated

}

