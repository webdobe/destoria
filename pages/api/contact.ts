// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

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

  const mailData = {
    from: req.body.email,
    to: process.env.CONTACT_EMAIL,
    subject: `Destoria Contact: ${req.body.subject}`,
    text: `${req.body.message} | ${req.body.name} | Sent from: ${req.body.email}`,
    html: `
        <div>${req.body.message}</div>
        <div>- ${req.body.name}</div>
        <p>Sent from: ${req.body.email}</p>
    `
  }

  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200);
}
