import { Employee } from "../../domain/entity/Employee";
import { EmployeeRepository } from "../../domain/interface/EmployeeRepository";

export class GetAllEmployeeUseCase {
  constructor(readonly employeeRepository: EmployeeRepository) {}

  async run(): Promise<Employee[] | null> {
    try {
        const result = await this.employeeRepository.getAll();
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
  }
}