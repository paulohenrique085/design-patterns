import { ITransport } from "../transport.interface";
import { Truck } from "../transports/truck";
import { TransportFactory } from "./transport.factory";

//Concrete factories for each type of transport
export class TruckFactory extends TransportFactory {
  numberOfTires: number;

  constructor(numberOfTires: number) {
    super();
    this.numberOfTires = numberOfTires;
  }

  createTransport(): ITransport {
    return new Truck(this.numberOfTires);
  }
}
