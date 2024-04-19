import { query } from "../../../database/database";
import { Client } from "../../domain/entity/Client";
import { ClientRepository } from "../../domain/interface/ClientRepository";

export class MySqlClientRepository implements ClientRepository {
    async getAll(): Promise<Client[] | null> {
        const sql = "SELECT * FROM clientes";
        try {
            const [data]: any = await query(sql, []);
            if (!data || data.length === 0) {
                return [];
            }
            const clients = Object.values(JSON.parse(JSON.stringify(data)));
            return clients.map((client: any) =>
                new Client(
                    client.id_cliente,
                    client.nombre,
                    client.apPaterno,
                    client.apMaterno,
                    client.edad,
                    client.celular,
                    client.password
                )
            );
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async createClient(
        nombre: string,
        apPaterno: string,
        apMaterno: string,
        edad: number,
        celular: string,
        password: string 
    ): Promise<Client | null> {
        const sql = "INSERT INTO clientes (nombre, apPaterno, apMaterno, edad, celular, password) VALUES (?,?,?,?,?,?)";
        const params: any[] = [nombre, apPaterno, apMaterno, edad, celular, password];

        try {
            const [result]: any = await query(sql, params);
            return new Client(result.insertId, nombre, apPaterno, apMaterno, edad, celular, password);
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}