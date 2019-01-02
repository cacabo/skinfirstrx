const express = require('express')
const next = require('next')
const sgMail = require('@sendgrid/mail')
const bodyParser = require('body-parser')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const routes = require('./constants/routes')

app.prepare()
  .then(() => {
    const { SENDGRID_API_KEY, EMAIL } = process.env

    if (!SENDGRID_API_KEY) {
      console.log('Missing SENDGRID_API_KEY')
      return
    } else if (!EMAIL) {
      console.log('Missing EMAIL')
      return
    }

    const server = express()

    server.use(bodyParser.json())

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    server.get(routes.HOME_PATH, (req, res) => {
      return app.render(req, res, routes.HOME_PATH, req.query)
    })

    server.post(routes.CONSULTATION_PATH, (req, res) => {
      if (!req || !req.body) return
      const {
        name,
        email,
        phone,
        zip,
        body,
      } = req.body

      const msg = {
        to: EMAIL,
        from: email,
        subject: 'Consultation request via skinfirstrx.com',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nZip: ${zip}\n\n${body}`,
        html: `
          <p>
            <strong>Name:</strong> ${name}><br />
            <strong>Email:</strong> ${email}<br />
            <strong>Phone:</strong> ${phone}<br />
            <strong>Zip:</strong> ${zip}<br />
          </p>
          <p>${body}</p>
        `,
      }

      sgMail.send(msg)
        .then(() => res.send({ success: true }))
        .catch(sgError => {
          res.send({
            success: false,
            error: sgError.message || 'There was an error sending the email',
          })
        })
    })

    server.post(routes.CONTACT_PATH, (req, res) => {
      console.log(req.body)

      const msg = {
        to: EMAIL,
        from: 'test@example.com',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }

      res.send(msg)

      // sgMail.send(msg)
      //   .then(() => res.send({ success: true }))
      //   .catch(sendgridError => {
      //     res.send({
      //       success: false,
      //       error: sendgridError.message || 'There was an error sending the email',
      //     })
      //   })
    })

    server.get(routes.WILDCARD_PATH, (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`App running on http://localhost:${port} 🐣`)
    })
  })
