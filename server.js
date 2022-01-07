// function sendMail() {
  const nodemailer = require('nodemailer');

  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: "gamemusicjamcontact@gmail.com",
          pass: "g4m3JAM!21"
      }
  });

  let message = {
      from: "gamemusicjamcontact@gmail.com",
      to: "admin@gamemusicjam.org",
      subject: "pls?",
      html: "pleaseeee work"
  }

  transporter.sendMail(message, function(err, info) {
      if (err) {
          console.log(err);
      } else {
          console.log(info);
      }
  })
// }