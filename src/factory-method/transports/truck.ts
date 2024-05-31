import { ITransport } from "../transport.interface";

//Concrete classes for each type of transport
export class Truck implements ITransport {
  numberOfTires: number;
  type: string;

  constructor(numberOfTires: number) {
    this.numberOfTires = numberOfTires;
    this.type = "TRUCK";
  }
  deliveryTime(): string {
    return "On average 15 days";
  }
  getNumberOfTires(): number {
    return this.numberOfTires;
  }
}
