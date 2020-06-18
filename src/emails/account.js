const sgMail = require('@sendgrid/mail')

//const sendgridApiKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'khatrisuneel96@gmail.com',
        subject: 'Thanks for joining us!',
        text: `Welcome to the App, ${name}. Let me know how you get along with the App.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'khatrisuneel96@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I have to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}