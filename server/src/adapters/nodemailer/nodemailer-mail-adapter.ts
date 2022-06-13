import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "737f4660e26494",
    pass: "21aa44a08f6a35"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Jonathan Ventura <jonathan_vmacedo@hotmail.com>',
    subject,
    html: body,
    })
  }
}