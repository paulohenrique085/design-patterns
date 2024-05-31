import { TransportFactory } from "./transport-factories/transport.factory";

export class TransportProcess {
  static startTransportProcess(factory: TransportFactory) {
    return factory.initiateDelivery();
  }
}
