import { ITransport } from "../transport.interface";
import { Ship } from "../transports/ship";
import { TransportFactory } from "./transport.factory";

//Concrete factories for each type of transport
export class ShipFactory extends TransportFactory {
  containerCapacity: number;
  constructor(containerCapacity: number) {
    super();
    this.containerCapacity = containerCapacity;
  }
  createTransport(): ITransport {
    return new Ship(this.containerCapacity);
  }
}
