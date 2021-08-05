const ordersRouter = require( 'express' ).Router()
const Order = require( '../models/order' )

ordersRouter.get( '/', ( req, res ) => {
	// Amount of vaccinations done
	/*
	Order
		.aggregate(
			[
				{ $lookup: {
					'localField': 'id',
					'from': 'vaccinations',
					'foreignField': 'sourceBottle',
					'as': 'vaccinations'
				} },
				{ $project: {
					_id: 0,
					numberOfVaccinationsPerBottle: { $size: '$vaccinations' }
				} },
				{ $group: {
					_id: null,
					numberOfVaccinationsDone: { $sum: '$numberOfVaccinationsPerBottle' }
				} },
				{ $project: {
					_id: 0,
					numberOfVaccinationsDone: 1
				} }
			] )
	*/

	// Total number of vaccines
	Order
		.aggregate(
			[
				{ $group: {
					_id: null,
					injections: { $sum: '$injections' }
				} },
				{ $project: {
					_id: 0,
					totalNumberOfVaccines: '$injections'
				} }
			] )
		.then( result => {
			res.json( result )
		} )
} )

module.exports = ordersRouter