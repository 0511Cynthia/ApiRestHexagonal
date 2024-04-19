import { Client } from "../../domain/entity/Client";
import { ClientRepository } from "../../domain/interface/ClientRepository";
import { EncriptServiceHelper } from "../../infrastructure/helpers/EncriptServiceHelper";
import { NotificationNewClientUseCase } from "../services/NotificationNewClientUseCase";

export class CreateClientUseCase {
    constructor (readonly clientReposiroty: ClientRepository, readonly encriptServiceHelper: EncriptServiceHelper, 
        readonly sendNotification: NotificationNewClientUseCase) {}

    async run(
        nombre: string,
        apPaterno: string,
        apMaterno: string,
        edad: number,
        celular: string,
        password: string
    ): Promise<Client | null> {
        let pass = this.encriptServiceHelper.encriptPassword(password);
        try {
            const client:any = await this.clientReposiroty.createClient(
                nombre,
                apPaterno,
                apMaterno,
                edad,
                celular,
                pass
            );
            if (client) {
                this.sendNotification.run(client);   
            }
            return client;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}