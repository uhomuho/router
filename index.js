const express = require('express'),
			bodyParser = require('body-parser'),
			axios = require('axios'),
			app = express(),
			proxy = require('express-http-proxy'),
			url = 'http://localhost:8081'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', proxy('http://tomcat.utyf.ru/api'));

let PORT = process.env.PORT || 8083
const server = app.listen( PORT, () => {
	console.log(`Server successfully running on port ${PORT}...`)
})