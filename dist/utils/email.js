"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _pug = _interopRequireDefault(require("pug"));

var _htmlToText = _interopRequireDefault(require("html-to-text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Email {
  constructor(order) {
    this.from = order.email;
    this.name = order.name;
    this.email = order.email;
    this.phone = order.phone;
    this.to = process.env.EMAIL_TO;
  }

  newTransport() {
    return _nodemailer.default.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  }

  async send(template, subject) {
    const html = _pug.default.renderFile(`${__dirname}/../views/email/${template}.pug`, {
      subject,
      name: this.name,
      email: this.email,
      phone: this.phone
    });

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: _htmlToText.default.fromString(html)
    };
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send("orderEmail", "Заказ на контакт");
  }

}

exports.default = Email;