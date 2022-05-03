const nodemailer= require('nodemailer');
const { callbackPromise } = require('nodemailer/lib/shared');

const transporter= nodemailer.createTransport({
    service: "hotmail",
    auth : {
        user:"ticketz_no_reply@outlook.com",
        pass: "Jorgito@22"
    }
});

const options= {
    from: "ticketz_no_reply@outlook.com",
    to: "ticketz.noreply@gmail.com",
    subject: "Prueba con nodemailer",
    text: "Llegó"
};

transporter.sendMail(options,callbackPromise());
