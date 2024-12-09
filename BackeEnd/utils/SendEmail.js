const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: 'abhayrahangadale6@gmail.com', 
      pass:process.env.Email_Send_key, 
    },
  });

  const mailOptions = {
    from: 'abhayrahangadale6@gmail.com',
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };