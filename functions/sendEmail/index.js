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
    from: '"Octo" <noreply@octo-mistic.com>', // sender address
    to: customerEmail, // list of receivers
    subject: "Octo - Order Confirmation", // Subject line
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Octo-mistic</title>
        <style type="text/css">
          body {
            margin: 0;
            background-color: #cccccc;
          }
          table {
            border-spacing: 0;
          }
          td {
            padding: 0;
          }
          img {
            border: 0;
          }
          .wrapper {
            width: 100%;
            table-layout: fixed;
            background-color: #cccccc;
            padding-bottom: 60px;
          }
          .main {
            background-color: #ffffff;
            margin: 0 auto;
            width: 100%;
            max-width: 600px;
            border-spacing: 0;
            font-family: sans-serif;
            color: #1a2032;
          }
          .two-columns {
            text-align: center;
            font-size: 0;
          }
          .two-columns .column {
            width: 100%;
            max-width: 300px;
            display: inline-block;
            vertical-align: top;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <center class="wrapper">
          <table class="main" width="100%">
            <!-- TOP BORDER -->
            <tr>
              <td height="28px" style="background-color: #1a2032"></td>
            </tr>
    
            <!-- LOGO SECTION -->
            <tr>
              <td style="padding: 14px 0 4px">
                <table width="100%">
                  <tr>
                    <td class="two-columns">
                      <table class="column">
                        <tr>
                          <td style="padding: 0 24px 10px">
                            <a href="https://octo-mistic.com"
                              ><img
                                src="https://res.cloudinary.com/daantetcr/image/upload/v1681751224/Octo/collections/Blackish/OCTO_Logotipo_transp-octo_ixffst.png"
                                alt="www.octo-mistic.com"
                                width="280px"
                                title="www.octo-mistic.com"
                            /></a>
                          </td>
                        </tr>
                      </table>
                      
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
    
            <!-- BANNER IMAGE -->
            <tr>
              <td>
                <a href=""
                  ><img
                    src="https://res.cloudinary.com/dmrll3fnf/image/upload/v1682856674/OCTO_SS23_574a_z3h2mr.webp"
                    alt=""
                    width="600"
                    style="max-width: 100%"
                /></a>
              </td>
            </tr>
    
            <!-- THREE COLUMN SECTION -->
            <tr>
              <td
                style="text-align: center; padding-left: 30px; padding-right: 30px"
              >
                <p
                  style="
                    font-weight: 800;
                    font-size: 40px;
                    color: #1a2032;
                    text-transform: uppercase;
                  "
                >
                Thank you for your order!            
                </p>
                <p style="font-weight: 800; font-size: 20px; color: #1a2032">
                  Your order has been successfully completed and is on its way to you!
                </p>
                <p style="font-weight: 800; font-size: 20px; color: #1a2032">
                  If you have any questions or concerns about your order, please don't hesitate to contact us.
                </p>
                <p style="font-weight: 800; font-size: 20px; color: #1a2032">
                  Thank you for choosing us! We look forward to see you again in the future!
                </p>
              </td>
            </tr>
    
            <!-- TWO COLUMN SECTION -->
    
            <!-- TITLE, TEXT & BUTTON -->
    
            <!-- FOOTER SECTION -->
            <tr style="background-color: #1a2032" style="padding-top: 40px;">
              <td
                style="
                  text-align: center;
                  padding-left: 30px;
                  padding-right: 30px;
                  padding-top: 30px;
                  padding-bottom: 30px;
                "
              >
                <p style=" font-size: 20px; color: #D2E500">
                  We are moms, dads and kids with no strings attached.
                </p>
              
                <!-- <a href="instagram://user?username=octo.mistic"
                style="background-color: transparent;"
                  ><img
                    src="https://tse3.mm.bing.net/th?id=OIP.yC2RfUP4wZg8EybQhVoSYAAAAA&pid=Api&P=0"
                    alt="instagram://user?username=octo.mistic"
                    width="30px"
                    
                /></a> -->
              </td>
             
            </tr>
           
          </table>
          
        </center>
      </body>
    </html>
    
    `, // html body
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
