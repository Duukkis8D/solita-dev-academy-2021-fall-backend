const mongoose = require( 'mongoose' )

const orderSchema = new mongoose.Schema( {
	'id': String,
	'orderNumber': Number,
	'responsiblePerson': String,
	'healthCareDistrict': String,
	'vaccine': String,
	'injections': Number,
	'arrived': String
} )

module.exports = mongoose.model( 'Order',  orderSchema, 'orders' )