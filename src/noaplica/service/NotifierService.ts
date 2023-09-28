import { EmailNotifier } from "../class/EmailNotifier";
import { FacebookNotifier } from "../class/FacebookNotifier";
import { SmsNotifier } from "../class/SmsNotifier";

import { WhatsAppNotifier } from "../class/WhatsAppNotifier";

export class NotifierService {

  private emailNotifier: EmailNotifier ;
  private whatsAppNotifier: WhatsAppNotifier;
  private smsNotifier: SmsNotifier;
  private facebookNotifier: FacebookNotifier;

  public constructor() {
    this.emailNotifier = new EmailNotifier();
    this.whatsAppNotifier = new WhatsAppNotifier();
    this.smsNotifier = new SmsNotifier();
    this.facebookNotifier = new FacebookNotifier();
  }

  public notify(message: string): void{
    this.emailNotifier.sendEmail(message);
    this.whatsAppNotifier.sendWhatsApp(message);
    this.smsNotifier.sendSmsMessage(message);
    this.facebookNotifier.sendMessageFacebook(message);

  }

}
