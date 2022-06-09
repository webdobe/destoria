// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {name, email, subject, message} = req.body;

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USER,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      accessToken: process.env.GOOGLE_ACCESS_TOKEN,
    }
  });

  if (name && email && message && subject) {
    const mailData = {
      from: email,
      to: process.env.CONTACT_EMAIL,
      subject: `Destoria Contact: ${subject}`,
      text: `${message} | ${name} | Sent from: ${email}`,
      html: `
        <div>${message}</div>
        <div>- ${name}</div>
        <p>Sent from: ${email}</p>
      `
    }

    transporter.sendMail(mailData, function (err, info) {
      if(err) {
        console.log("SENDMAIL: ", err);
        res.status(500);
      } else {
        console.log("SENDMAIL: ", info)
        res.status(200);
      }
    })
  } else {
    res.status(400).json({name: ''});
  }
}
