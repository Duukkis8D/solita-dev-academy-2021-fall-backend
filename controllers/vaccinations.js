const vaccinationsRouter = require( 'express' ).Router()
const Vaccination = require( '../models/vaccination' )

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
		.then( vaccinations => {
			res.json( vaccinations )
		} )
} )

module.exports = vaccinationsRouter