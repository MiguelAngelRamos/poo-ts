import { INotifier } from "../interface/INotifier";

export class EmailNotifier implements INotifier {
  send(message: string): void {
    console.log("Enviando un Email: " + message);
  }
}

//* AutoMovil (plantilla) para crear mas objetos
//* una instancia de clase Automovil -> objeto Hyundai
//* una instancia de clase Automovil -> objeto Ford
