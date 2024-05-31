import { ShipFactory } from "../factory-method/transport-factories/ship.factory";
import { TruckFactory } from "../factory-method/transport-factories/truck.factory";
import { TransportProcess } from "../factory-method/transport-proecess";

describe("FactoryMethod", () => {
  it("deve testar se o serviço start-transport executa um delivery feito por um caminhão", async () => {
    const truckFactory = new TruckFactory(16);

    const delivery = TransportProcess.startTransportProcess(truckFactory);

    expect(delivery?.transport?.numberOfTires).toBe(16);
    expect(delivery?.transport?.type).toBe("TRUCK");
  });
  it("deve testar se o serviço start-transport executa um delivery feito por um navio", async () => {
    const shipFactory = new ShipFactory(43);

    const delivery = TransportProcess.startTransportProcess(shipFactory);

    expect(delivery?.transport?.containerCapacity).toBe(43);
    expect(delivery?.transport?.type).toBe("SHIP");
  });
});
