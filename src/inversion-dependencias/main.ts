//* La inversión de dependencia nos permite evitar el acoplamiento.

import { EmailNotifier } from "./class/EmailNotifier";
import { FacebookNotifier } from "./class/FacebookNotifier";
import { TwitterNotifier } from "./class/TwitterNotifier";
import { WhatsAppNotifier } from "./class/WhatsAppNotifier";
import { INotifier } from "./interface/INotifier";
import { NotifierService } from "./service/NotifierService";

// const emailNotifier = new EmailNotifier();
// const twitterNotifier = new TwitterNotifier();
// const service = new NotifierService(twitterNotifier);

const notifiers: INotifier[] = [
  new EmailNotifier(),
  new TwitterNotifier(),
  new WhatsAppNotifier(),
  new FacebookNotifier(),
];

const service = new NotifierService(notifiers);
service.notify("Hola desde el curso de Node aplicando Inversion de dependencias!");


