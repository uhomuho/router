const express = require('express'),
			bodyParser = require('body-parser'),
			axios = require('axios'),
			app = express(),
			proxy = require('express-http-proxy'),
			cors = require('cors')
			url = 'http://localhost:8081'

app.use(cors({
  origin : "http://localhost:8083",
  credentials: true,
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', proxy('http://tomcat.utyf.ru/api'));

let PORT = process.env.PORT || 8083
const server = app.listen( PORT, () => {
	console.log(`Server successfully running on port ${PORT}...`)
})