//* Una interface es un contrato de implementación
export interface INotifier {
  send(message: string): void; //* metodo abstracto sin implementación
}
