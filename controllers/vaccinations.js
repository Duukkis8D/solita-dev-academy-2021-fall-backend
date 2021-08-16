const vaccinationsRouter = require( 'express' ).Router()
const Vaccination = require( '../models/vaccination' )

vaccinationsRouter.get( '/firstVaccinationDate', ( req, res ) => {
	Vaccination
		.aggregate(
			[
				{ $project: {
					'vaccinationDate': 1,
					'date': { $dateFromString: { 'dateString': '$vaccinationDate' } }
				} },
				{ $group: {
					_id: null,
					firstVaccination: { $min: '$date' }
				} },
				{ $project: {
					_id: 0,
					firstVaccination: 1
				} }
			] )
		.then( result => {
			res.json( result )
		} )
} )

vaccinationsRouter.get( '/latestVaccinationDate', ( req, res ) => {
	Vaccination
		.aggregate(
			[
				{ $project: {
					'vaccinationDate': 1,
					'date': { $dateFromString: { 'dateString': '$vaccinationDate' } }
				} },
				{ $group: {
					_id: null,
					latestVaccination: { $max: '$date' }
				} },
				{ $project: {
					_id: 0,
					latestVaccination: 1
				} }
			] )
		.then( result => {
			res.json( result )
		} )
} )

vaccinationsRouter.get( '/amountOfVaccinationsDone/:dateAndTime', ( req, res ) => {
	const dateAndTime = new Date( req.params.dateAndTime )

	Vaccination
		.aggregate(
			[
				{ $project: {
					'date': { $dateFromString: { 'dateString': '$vaccinationDate' } }
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

module.exports = vaccinationsRouter