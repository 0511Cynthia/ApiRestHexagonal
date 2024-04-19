import { Client } from "../entity/Client";

export default interface INotificationNewClient{
    sendNotification(client: Client):Promise<boolean>;
}