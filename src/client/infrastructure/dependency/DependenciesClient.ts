import { CreateClientController } from "../controllers/CreateClientController";
import { CreateClientUseCase } from "../../application/methods/CreateClientUseCase";
import { GetAllClientsController } from "../controllers/GetAllClientController";
import { GetAllClientsUseCase } from "../../application/methods/GetAllClientUseCase";
import { MySqlClientRepository } from "../repository/MySqlClientRepository";
import { EncriptServiceHelper } from "../helpers/EncriptServiceHelper";
import { NotificationNewClient } from "../servicesRabbitMQ/NotificationNewClient";
import { NotificationNewClientUseCase } from "../../application/services/NotificationNewClientUseCase";

export const mySqlClientRepository = new MySqlClientRepository();
export const encriptServiceHelper = new EncriptServiceHelper();
export const notificationNewClient = new NotificationNewClient();
export const servicesNotification = new NotificationNewClient();
export const serviceNotificationUseCase = new NotificationNewClientUseCase(servicesNotification);

export const createClientUseCase = new CreateClientUseCase(mySqlClientRepository, encriptServiceHelper, serviceNotificationUseCase);
export const getAllUseCase = new GetAllClientsUseCase(mySqlClientRepository);

export const createClientController = new CreateClientController(createClientUseCase);
export const getAllClientsController = new GetAllClientsController(getAllUseCase);
