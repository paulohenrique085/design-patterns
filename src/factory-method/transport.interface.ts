//Interface for the transport types
export interface ITransport {
  type: string;
  getNumberOfTires?(): number;
  getContainerCapacity?(): number;
  deliveryTime(): string;
}
