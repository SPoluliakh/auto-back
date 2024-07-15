const express = require('express')
const cors = require('cors')
require('dotenv').config()
const lotsRouter = require('./routs/lots')


const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', lotsRouter)

app.use((_, res) => {
	res.status(404).json({
		message: 'Not Found'
	})
})
app.use((err, req, res, next) => {
	const{status = 500, message = 'Server error'} = err
	res.status(status).json({message})
})

module.exports = app