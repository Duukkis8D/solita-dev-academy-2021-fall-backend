const mongoose = require( 'mongoose' )

const orderSchema = new mongoose.Schema( {
	'_id': mongoose.Schema.Types.ObjectId,
	'id': { type: String, ref: 'Vaccination' },
	'orderNumber': Number,
	'responsiblePerson': String,
	'healthCareDistrict': String,
	'vaccine': String,
	'injections': Number,
	'arrived': String
}, { id: false } )

orderSchema.set( 'toObject', {
	transform: ( document, returnedObject ) => {
		delete returnedObject._id
		return returnedObject
	}
} )

module.exports = mongoose.model( 'Order',  orderSchema, 'orders' )