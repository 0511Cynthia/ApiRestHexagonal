import { Employee } from "../../domain/entity/Employee";
import { EmployeeRepository } from "../../domain/interface/EmployeeRepository";

export class CreateEmployeeUseCase {
  constructor(readonly employeeRepository: EmployeeRepository) {}

  async run(
    nombre: string,
    apPaterno: string,
    apMaterno: string,
    edad: number,
    celular: string,
    rol: string
  ): Promise<Employee | null> {
    try {
      const employee = await this.employeeRepository.createEmployee(
        nombre,
        apPaterno,
        apMaterno,
        edad,
        celular,
        rol
      );
      console.log("Resultado de la consulta: ", employee);
      return employee;
    } catch (error) {
      console.log("Error al crear el empleado: ", error);
      return null;
    }
  }
}