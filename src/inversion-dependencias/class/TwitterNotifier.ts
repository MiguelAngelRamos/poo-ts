import { INotifier } from "../interface/INotifier";

export class TwitterNotifier implements INotifier{
  send(message: string): void {
    console.log('Enviando un Twitter con el mensaje: ' + message);
  }

}
