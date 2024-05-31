import { ITransport } from "../transport.interface";

//Abstract factory class that declares the factory method
export abstract class TransportFactory {
  abstract createTransport(): ITransport;

  //Method that uses the created transport
  initiateDelivery(): any {
    const transport = this.createTransport();

    switch (transport.type) {
      case "TRUCK":
        return {
          transport: {
            type: transport.type,
            numberOfTires: transport.getNumberOfTires?.(),
          },

          observations: transport.deliveryTime(),
        };

      case "SHIP":
        return {
          transport: {
            type: transport.type,
            containerCapacity: transport.getContainerCapacity?.(),
          },

          observations: transport.deliveryTime(),
        };
    }
  }
}
