import { Employee } from "../../domain/entity/Employee";
import { EmployeeRepository } from "../../domain/interface/EmployeeRepository";

export class DeleteEmployeeUseCase{
    constructor (readonly employeeRepository: EmployeeRepository) {}

    async run(
        celular:string
    ):Promise<boolean | null>{
        try {
            const result = await this.employeeRepository.deleteEmployee(celular);
            console.log("Resultado de la eliminación: ", result);
            return result;
          } catch (error) {
            console.log("Error al eliminar el empleado: ", error);
            return null;
        }
    }
}