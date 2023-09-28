import { INotifier } from "../interface/INotifier";

export class NotifierService {
//* La inversión de dependencia nos permite evitar el acoplamiento.
//* Es que debemos depender de una Abstracción y No de una Implementación Concreta.

  private notifiers: INotifier[];

  constructor(notifiers: INotifier[]) {
    this.notifiers = notifiers;
  }

  public notify(message: string): void {
    //* [new EmailNotifier(), new TwitterNotifier()]
    for(let notifier of this.notifiers) {
      notifier.send(message);
    }
  }
  // public notifier: INotifier;

  // public constructor(notifier: INotifier) {
  //   this.notifier = notifier;
  // }

  // public notify(message: string): void{
  //   this.notifier.send(message);
  // }



}
