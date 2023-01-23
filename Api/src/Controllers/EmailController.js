const nodemailer = require('nodemailer');

// Llamarla con un email , un mensaje y se envia automaticamente
module.exports = {

    async sendEmail(receiverEmail, message) {
        try {
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: "yourvibesfashion@gmail.com",
                    pass: "mqogksikoyaimapv",
                },
            });
            await transporter.sendMail({
                from: '"Your Vibe"<yourvibesfashion@gmail.com>',
                to: receiverEmail,
                subject: "Your Vibe Fashion!",
                text: message,
            });

        } catch (error) {
            console.log(error)
            return null;
        }
    }
}
