import { Client } from "../../domain/entity/Client";
import { ClientRepository } from "../../domain/interface/ClientRepository";

export class GetAllClientsUseCase {
    constructor(readonly clientRepository: ClientRepository) {}

    async run(): Promise<Client[] | null> {
        try {
            const result = await this.clientRepository.getAll();
            
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}