const mongoose = require( 'mongoose' )

const vaccinationSchema = new mongoose.Schema( {
	'vaccination-id': String,
	'sourceBottle': String,
	'gender': String,
	'vaccinationDate': String
} )

module.exports = mongoose.model( 'Vaccination',  vaccinationSchema, 'vaccinations' )