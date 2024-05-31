import { ITransport } from "../transport.interface";

//Concrete classes for each type of transport
export class Ship implements ITransport {
  type: string;
  containerCapacity: number;

  constructor(containerCapacity: number) {
    this.containerCapacity = containerCapacity;
    this.type = "SHIP";
  }
  deliveryTime(): string {
    return "On average 9 days";
  }
  getContainerCapacity(): number {
    return this.containerCapacity;
  }
}
