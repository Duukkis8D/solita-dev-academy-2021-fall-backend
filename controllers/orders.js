const ordersRouter = require( 'express' ).Router()
const Order = require( '../models/order' )

ordersRouter.get( '/amountOfVaccines/:dateAndTime', ( req, res ) => {
	const dateAndTime = new Date( req.params.dateAndTime )

	Order
		.aggregate(
			[
				{ $project: {
					'injections': 1,
					'date': { $dateFromString: { 'dateString': '$arrived' } }
				} },
				{ $match: {
					'date': { $lte: dateAndTime }
				} },
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