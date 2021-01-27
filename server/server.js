const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const credentials = require('../dev_config.js');
const port = 3000;

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: credentials.user,
    pass: credentials.pw
  }
});

transporter.verify(function(err, success) {
  if (err) {
    console.log(err);
  } else {
    console.log('we good bah!');
  }
});



router.post('/send', (req, res, next) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  let content = `name: ${name} \n email: ${email} \n message: ${message}`;

  let mail = {
    from: name,
    to: 'micaela.rob@gmail.com',
    subject: 'New Message!',
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      });
    } else {
      res.json({
        status: 'success'
      });
    }
  });
});






app.use(express.static(path.resolve(__dirname, '../client/public')));
app.use(cors());
app.use(express.json());
app.use('/', router);




//


app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});

