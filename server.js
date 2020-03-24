// load our app server using express somehow..
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');



app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('./public'));

app.use(morgan('short'));

app.get("/contact/", (req, res) => {
    console.log("Responding to root route");
    res.send("Hello from ROOOT");
});


app.post('/contact/send', (req, res) => {
  const output = `
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Organization: ${req.body.organization}</li>
      <li>Email: ${req.body.email}</li>
      <li>Subject: ${req.body.subject}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.body}</p>
  `;

// create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'admin@cybra.io', // generated ethereal user
        pass: 'gwtbgyv3dzjruob7h7zjm598uqobqqaobysmgocgi6vauvu5vuhk89xrw428idu5wruaobyjh6md6q6xkemhyjafcbcti3zvpzxm8'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Website EN Contact Form" <admin@cybra.io>', // sender address
      to: 'info@cybra.io', // list of receivers
      subject: '📩 Contact Request', // Subject line
      // text: 'Hello world?', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      // res.send('Sent.');
      res.redirect('../letstalk.html');
  });
});

app.post('/contact/sendAR', (req, res) => {
  const output = `
    <body style="direction: rtl">
    <h3>التفاصيل</h3>
    <ul>  
      <li>الاسم: ${req.body.name}</li>
      <li>المنظمة: ${req.body.organization}</li>
      <li>الايميل: ${req.body.email}</li>
      <li>العنوان: ${req.body.subject}</li>
      <li>الهاتف: ${req.body.phone}</li>
    </ul>
    <h3>الرسالة</h3>
    <p>${req.body.body}</p>
    </body>
  `;

// create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'admin@cybra.io', // generated ethereal user
        pass: 'gwtbgyv3dzjruob7h7zjm598uqobqqaobysmgocgi6vauvu5vuhk89xrw428idu5wruaobyjh6md6q6xkemhyjafcbcti3zvpzxm8'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Website AR Contact Form" <admin@cybra.io>', // sender address
      to: 'info@cybra.io', // list of receivers
      subject: '📩 Contact Request', // Subject line
      // text: 'Hello world?', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      // res.send('Sent.');
      res.redirect('../letstalk_ar.html');
  });
});

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
    console.log("Server is up and listening on: " + PORT);
});
