const mongoose = require('mongoose');
const app = require('./app');


const {DB_HOST_CONNECT, PORT = 4000} = process.env
mongoose.set('strictQuery', true);
mongoose.connect(DB_HOST_CONNECT).then(() => {
	app.listen(PORT);
	console.log(`Connected db successfully. API is on port: ${PORT}`)
}).catch(err => {console.log(err.message)
				process.exit(1)
})