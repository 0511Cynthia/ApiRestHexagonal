import { Client } from "../../domain/entity/Client";
import INotificationNewClient from "../../domain/services/INotificationNewClient";
import amqplib from 'amqplib';

export class NotificationNewClient implements INotificationNewClient{
    // private options: any;
    private url: any;
    private exch: any;
    
    constructor() {
        // this.options = {
        //     username: process.env.AMQP_USERNAME,
        //     password: process.env.AMQP_PASS,
        //     port: process.env.AMQP_PORT
        // };
        this.url = process.env.AMQP_URL_EC2;
        this.exch = process.env.EXCHANGE_EC2;
    }
    async sendNotification(client: Client): Promise<boolean> {
        const conn = await amqplib.connect(this.url);
        const channel = await conn.createChannel();
        const status = await channel.publish(this.exch,'',Buffer.from(JSON.stringify(client.id_cliente)))
        console.log(status);
        return status
    }
}