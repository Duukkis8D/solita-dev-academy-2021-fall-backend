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

ordersRouter.get( '/amountOfOrders/:dateAndTime', ( req, res ) => {
	const dateAndTime = new Date( req.params.dateAndTime )

	Order
		.aggregate(
			[
				{ $project: {
					'date': { $dateFromString: { 'dateString': '$arrived' } }
				} },
				{ $match: {
					'date': { $lte: dateAndTime }
				} },
				{ $group: {
					_id: null,
					count: { $sum: 1 }
				} },
				{ $project: {
					_id: 0,
					count: 1
				} }
			] )
		.then( result => {
			if( result.length > 0 ) res.json( result )
			else res.json( [ { count: 0 } ] )
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
			if( result.length > 0 ) res.json( result )
			else res.json( [ { totalNumberOfVaccines: 0 } ] )
		} )
} )

ordersRouter.get( '/vaccinesExpiredBeforeUse/:dateAndTime', ( req, res ) => {
	const dateAndTime = new Date( req.params.dateAndTime )

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
					injections: 1,
					arrivedDate: { $dateFromString: { 'dateString': '$arrived' } },
					usedVaccinesInBottle: { $size: '$vaccinations' }
				} },
				{ $project: {
					arrivedDate: 1,
					unUsedVaccinesInBottle: { $subtract: [ '$injections', '$usedVaccinesInBottle' ] }
				} },
				{ $project: {
					expiredVaccinesInBottle: {
						$cond: { if: { $lte: [ { $add: [ '$arrivedDate', 30*24*60*60000 ] }, dateAndTime ] }, then: '$unUsedVaccinesInBottle', else: 0 }
					}
				} },
				{ $group: {
					_id: null,
					expiredVaccinesTotal: { $sum: '$expiredVaccinesInBottle' }
				} },
				{ $project: {
					_id: 0,
					expiredVaccinesTotal: 1
				} }
			] )
		.then( result => {
			if( result.length > 0 ) res.json( result )
			else res.json( [ { expiredVaccinesTotal: 0 } ] )
		} )
} )

module.exports = ordersRouter