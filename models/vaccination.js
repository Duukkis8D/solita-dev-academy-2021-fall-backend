const mongoose = require( 'mongoose' )

const vaccinationSchema = new mongoose.Schema( {
	'vaccination-id': String,
	'sourceBottle': { type: mongoose.Schema.Types.String, ref: 'Order' },
	'gender': String,
	'vaccinationDate': String
} )

module.exports = mongoose.model( 'Vaccination',  vaccinationSchema, 'vaccinations' )