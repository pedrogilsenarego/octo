require("dotenv").config();
const sendEmail = (customerEmail) => {
  const nodemailer = require("nodemailer");

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // send mail with defined transport object
  const mailOptions = {
    from: '"Octo-Mistic" <noreply@octo-mistic.com>', // sender address
    to: customerEmail, // list of receivers
    subject: "OctoMistic - Order Confirmation", // Subject line
    html: `<div style={{display::flex, flexDirection:"column", rowGap:"30px"}}>
    <p style={{fontSize:"40px"}}>Your order in Octo-mistic is complete!</p>
    <p style={{fontSize:"40px"}}>Thank you for purchasing with us!</p>
    <p style={{fontSize:"40px"}}>Thank you for purchasing with us!</p>
    
    </div>`, // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { sendEmail };
