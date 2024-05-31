import { ShipFactory } from "../factory-method/transport-factories/ship.factory";
import { TruckFactory } from "../factory-method/transport-factories/truck.factory";
import { TransportProcess } from "../factory-method/transport-proecess";

describe("FactoryMethod", () => {
  it("deve testar se o serviço start-transport executa um delivery feito por um caminhão", async () => {
    const truckFactory = new TruckFactory();
    const result = TransportProcess.startTransportProcess(truckFactory);
    expect(result).toBe("Delivering by truck.");
  });
  it("deve testar se o serviço start-transport executa um delivery feito por um navio", async () => {
    const shipFactory = new ShipFactory();
    const result = TransportProcess.startTransportProcess(shipFactory);
    expect(result).toBe("Delivering by ship.");
  });
});
