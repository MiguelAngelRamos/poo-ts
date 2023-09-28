import { INotifier } from "../interface/INotifier";

export class SmsNotifier implements INotifier {
  send(message: string): void {
    console.log('Enviando un sms: ' +  message);
  }

}
