require( 'dotenv' ).config()
const express = require( 'express' )
const app = express()
const Vaccination = require( './models/vaccination' )

app.get( '/', ( req, res ) => {
	res.send( '<h1>Hello World!</h1>' )
} )

app.get( '/api/vaccinations', ( req, res ) => {
	Vaccination.find( { vaccinationDate: '2021-03-30T02:18:36.678468Z' } ).then( vaccinations => {
		res.json( vaccinations )
	} )
} )

const PORT = 3001
app.listen( PORT, () => {
	console.log( `Server running on port ${PORT}` )
} )