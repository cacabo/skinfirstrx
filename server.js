const express = require('express')
const next = require('next')
const sgMail = require('@sendgrid/mail')
const bodyParser = require('body-parser')
const path = require('path')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const routes = require('./constants/routes')

// TODO error page

app.prepare()
  .then(() => {
    // Configure sendgrid for sending emails
    const { SENDGRID_API_KEY, EMAIL } = process.env

    if (!SENDGRID_API_KEY) {
      console.log('Missing SENDGRID_API_KEY') // eslint-disable-line
      return
    }

    if (!EMAIL) {
      console.log('Missing EMAIL') // eslint-disable-line
      return
    }

    const server = express()

    // Middleware
    server.use(bodyParser.json())
    server.use(express.static(path.join(__dirname, 'public')))

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    // Home page
    server.get(routes.HOME_PATH, (req, res) => (
      app.render(req, res, routes.HOME_PATH, req.query)
    ))

    // Request for a free consultation
    server.post(routes.CONSULTATION_PATH, (req, res) => {
      if (!req || !req.body) {
        res.send({
          success: false,
          error: 'Improper request.',
        })
        return
      }

      const {
        name,
        email,
        phone,
        zip,
        body,
      } = req.body

      if (!name || !email || !phone || !zip || !body) {
        res.send({
          success: false,
          error: 'Improper request.',
        })
        return
      }

      if (
        name.length > 200
        || email.length > 200
        || phone.length > 20
        || zip.length !== 6
        || body.length > 5000
      ) {
        res.send({
          success: false,
          error: 'Improper request.',
        })
        return
      }

      const msg = {
        to: EMAIL,
        from: email,
        subject: 'Consultation request via skinfirstrx.com',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nZip: ${zip}\n\n${body}`,
        html: `
          <p>
            <strong>Name:</strong> ${name}<br />
            <strong>Email:</strong> ${email}<br />
            <strong>Phone:</strong> ${phone}<br />
            <strong>Zip code:</strong> ${zip}<br />
          </p>
          <p>${body}</p>
        `,
      }

      sgMail.send(msg)
        .then(() => res.send({ success: true }))
        .catch((sgError) => {
          res.send({
            success: false,
            error: sgError.message || 'There was an error sending the email',
          })
        })
    })

    // Request to contact
    server.post(routes.CONTACT_PATH, (req, res) => {
      if (!req || !req.body) {
        res.send({
          success: false,
          error: 'Improper request.',
        })
        return
      }

      const {
        name,
        email,
        body,
        services,
      } = req.body

      if (!name || !email || !body || !services) {
        res.send({
          success: false,
          error: 'Improper request.',
        })
        return
      }

      if (
        name.length > 200
        || email.length > 200
        || body.length > 5000
        || services.length > 2000
      ) {
        res.send({
          success: false,
          error: 'Improper request.',
        })
        return
      }

      const msg = {
        to: EMAIL,
        from: email,
        subject: 'Contact request via skinfirstrx.com',
        text: `Name: ${name}\nEmail: ${email}\nServices interested in: ${services}\n\n${body}`,
        html: `
        <p>
          <strong>Name:</strong> ${name}<br />
          <strong>Email:</strong> ${email}<br />
          <strong>Services interested in:</strong> ${services}<br />
        </p>
        <p>${body}</p>
        `,
      }

      sgMail.send(msg)
        .then(() => res.send({ success: true }))
        .catch((sgError) => {
          res.send({
            success: false,
            error: sgError.message || 'There was an error sending the email',
          })
        })
    })

    server.get(routes.WILDCARD_PATH, (req, res) => (
      handle(req, res)
    ))

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`App running on http://localhost:${port} 🐣`) // eslint-disable-line
    })
  })
