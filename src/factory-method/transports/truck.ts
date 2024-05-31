import { ITransport } from "../transport.interface";

//Concrete classes for each type of transport
export class Truck implements ITransport {
  deliver(): string {
    return "Delivering by truck.";
  }
}
