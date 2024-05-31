import { ITransport } from "../transport.interface";

//Concrete classes for each type of transport
export class Ship implements ITransport {
  deliver(): string {
    return "Delivering by ship.";
  }
}
