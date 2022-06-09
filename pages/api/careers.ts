// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {name, email, message, social, social2, portfolio, discord} = req.body;

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

  if (name && email && message && discord) {
    const mailData = {
      from: email,
      to: process.env.CONTACT_EMAIL,
      subject: `Destoria Careers: ${name}`,
      text: `
        ${message} | ${name} 
        ${discord ? `| ${discord}` : ''} 
        ${portfolio ? `| ${portfolio}` : ''} 
        ${social ? `| ${social}` : ''} 
        ${social2 ? `| ${social2}` : ''} 
        | Sent from: ${email}
      `,
      html: `
        <div>${message}</div>
        <div>Discord: ${discord}</div>
        <div>Portfolio: ${portfolio}</div>
        <div>Social: ${social}</div>
        <div>Social 2: ${social2}</div>
        <div>- ${name}</div>
        <p>Sent from: ${email}</p>
      `
    }

    transporter.sendMail(mailData, function (err, info) {
      if(err) {
        console.log("SENDMAIL: ", err);
        res.status(500).json({message: 'Unable to send email.'});
      } else {
        console.log("SENDMAIL: ", info)
        res.status(200).json({message: 'Successfully sent email.'});
      }
    })
  } else {
    res.status(400).json({message: 'Invalid request.'});
  }
}
