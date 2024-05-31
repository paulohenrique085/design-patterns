import { ITransport } from "../transport.interface";

//Abstract factory class that declares the factory method
export abstract class TransportFactory {
  abstract createTransport(): ITransport;

  //Method that uses the created transport
  initiateDelivery(): any {
    const transport = this.createTransport();
    return transport.deliver();
  }
}
