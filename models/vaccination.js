const mongoose = require( 'mongoose' )

const vaccinationSchema = new mongoose.Schema( {
	'_id': mongoose.Schema.Types.ObjectId,
	'vaccination-id': String,
	'sourceBottle': { type: String, ref: 'Order' },
	'gender': String,
	'vaccinationDate': String
}, { id: false } )

vaccinationSchema.set( 'toObject', {
	transform: ( document, returnedObject ) => {
		delete returnedObject._id
		return returnedObject
	}
} )

module.exports = mongoose.model( 'Vaccination',  vaccinationSchema, 'vaccinations' )