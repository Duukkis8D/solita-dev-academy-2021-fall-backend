const config = require( './utils/config' )
const express = require( 'express' )
const app = express()
const morgan = require( 'morgan' )
const ordersRouter = require( './controllers/orders' )
const vaccinationsRouter = require( './controllers/vaccinations' )
const logger = require( './utils/logger' )
const mongoose = require( 'mongoose' )

logger.info( 'connecting to', config.MONGODB_URI )

mongoose.connect( config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true } )
	.then( () => {
		logger.info( 'connected to MongoDB' )
	} )
	.catch( ( error ) => {
		logger.error( 'error connection to MongoDB:', error.message )
	} )

app.use( morgan( 'tiny' ) )
app.use( '/api/orders', ordersRouter )
app.use( '/api/vaccinations', vaccinationsRouter )

module.exports = app