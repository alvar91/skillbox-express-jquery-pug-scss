import nodemailer from "nodemailer";
import pug from "pug";
import htmlToText from "html-to-text";

export default class Email {
  constructor(order) {
    this.from = order.email;
    this.name = order.name;
    this.email = order.email;
    this.phone = order.phone;
    this.to = process.env.EMAIL_TO;
  }

  newTransport() {
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(template, subject) {
    const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
      subject,
      name: this.name,
      email: this.email,
      phone: this.phone,
    });

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.fromString(html),
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send("orderEmail", "Заказ на контакт");
  }
}
