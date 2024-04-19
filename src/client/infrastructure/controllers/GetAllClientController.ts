import { Request, Response } from "express";
import { GetAllClientsUseCase } from "../../application/methods/GetAllClientUseCase";

export class GetAllClientsController {
    constructor(readonly getAllClientsUseCase: GetAllClientsUseCase) {}

    async run(req: Request, res:Response){
        try {
            const clients = await this.getAllClientsUseCase.run();
            if (clients) {
                res.status(200).send({
                    status: "success",
                    data: clients.map((client: any)=>{
                        return {
                            id_cliente: client.id_cliente,
                            nombre: client.nombre,
                            apPaterno: client.apPaterno,
                            apMaterno: client.apMaterno,
                            edad: client.edad,
                            celular: client.celular
                        };
                    })
                });
            }else{
                res.status(400).send({
                    status: "error",
                    message: "Ha ocurrido un problema al obtener los datos"
                });
            }
        } catch (error) {
            res.status(204).send({
                status: "error",
                data: "Ha ocurrido un error, sin contenido",
                message: error
            });
        }
    }
}