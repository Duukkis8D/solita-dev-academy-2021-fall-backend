const ordersRouter = require( 'express' ).Router()
const Order = require( '../models/order' )

ordersRouter.get( '/firstOrderDate', ( req, res ) => {
	Order
		.aggregate(
			[
				{ $project: {
					'arrived': 1,
					'date': { $dateFromString: { 'dateString': '$arrived' } }
				} },
				{ $group: {
					_id: null,
					firstOrder: { $min: '$date' }
				} },
				{ $project: {
					_id: 0,
					firstOrder: 1
				} }
			] )
		.then( result => {
			res.json( result )
		} )
} )

ordersRouter.get( '/latestOrderDate', ( req, res ) => {
	Order
		.aggregate(
			[
				{ $project: {
					'arrived': 1,
					'date': { $dateFromString: { 'dateString': '$arrived' } }
				} },
				{ $group: {
					_id: null,
					latestOrder: { $max: '$date' }
				} },
				{ $project: {
					_id: 0,
					latestOrder: 1
				} }
			] )
		.then( result => {
			res.json( result )
		} )
} )

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