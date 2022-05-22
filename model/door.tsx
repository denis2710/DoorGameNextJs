class DoorModel {
  constructor(
    public readonly number: number, 
    public readonly hasGift: boolean = false, 
    public selected: boolean = false, 
    public opened: boolean = false,
  ){}
}

export {DoorModel}