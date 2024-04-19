import { Request, Response } from "express";
import { DeleteEmployeeUseCase } from "../../application/methodsEmployee/DeleteEmployeeUseCase";

export class DeleteEmployeeController {
    constructor (readonly deleteEmployeeUseCase: DeleteEmployeeUseCase) {}

    async run(req:Request, res:Response) {
        const data = req.body;

        try {
            const result = await this.deleteEmployeeUseCase.run(
                data.celular
            );
            if(result){
                res.status(200).send({
                    status: "success",
                    data: {
                      message: "Empleado eliminado"
                    },
                });
            }else{
                res.status(204).send({
                  status: "error",
                  data: "Empleado no eliminado",
                });
            }
        } catch (error) {
            res.status(204).send({
                status: "error",
                data: "Ha currio un error",
                message: error,
            });
        }
    }
}