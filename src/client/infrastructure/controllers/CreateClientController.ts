import { Request, Response } from "express";
import { CreateClientUseCase } from "../../application/methods/CreateClientUseCase";
import dotenv from "dotenv";

export class CreateClientController {
    constructor(readonly createClientUseCase: CreateClientUseCase) {}

    async run(req: Request, res: Response){
        const data = req.body;
        
        try {
            const client = await this.createClientUseCase.run(
                data.nombre,
                data.apPaterno,
                data.apMaterno,
                data.edad,
                data.celular,
                data.password
            );

            if(client){
                res.status(201).send({
                    status: "success",
                    data: {
                        id_cliente: client?.id_cliente,
                        nombre: client?.nombre,
                        apPaterno: client?.apPaterno,
                        apMaterno: client?.apMaterno,
                        edad: client?.edad,
                        celular: client?.celular,
                        password: client?.password
                    },
                });
            }
            else{
                res.status(204).send({
                    status: "error",
                    data: "Cliente no agregado"
                });
            }
        } catch(error){
            res.status(204).send({
                status: "error",
                data: "Ha ocurrido un error",
                messages: error
            });
        }
    }
}