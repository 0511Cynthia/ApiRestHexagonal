import { Client } from "../../domain/entity/Client";
import { NotificationNewClient } from "../../infrastructure/servicesRabbitMQ/NotificationNewClient";

export class NotificationNewClientUseCase {
  constructor(readonly serviceNotifiacion: NotificationNewClient) {}

  async run(client: Client) {
    await this.serviceNotifiacion.sendNotification(client);
  }
}