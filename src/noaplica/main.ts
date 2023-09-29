import { NotifierService } from "./service/NotifierService";

// const service = new NotifierService(notifiers);
const service = new NotifierService();
service.notify("Hola a todos desde curso de Node.js con Typescript para crear servicios Rest");

//* comando para arrancar, npx ts-node src/inversion-dependencias/main.ts
