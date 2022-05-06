import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapters";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "57d73d7967bfc9",
        pass: "ec908a1eefb466"
    }
});

export class NodemailerMailAdapter implements MailAdapter
{
   async sendMail({subject, body}: SendMailData) 
   {
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Frederico Rezende <fredericorez@gmail.com>',
        subject,
        html: body,
    });
   }
}