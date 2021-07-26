const vaccinationsRouter = require( 'express' ).Router()
const Vaccination = require( '../models/vaccination' )

vaccinationsRouter.get( '/', ( req, res ) => {
	Vaccination.find( { vaccinationDate: '2021-03-30T02:18:36.678468Z' } ).then( vaccinations => {
		res.json( vaccinations )
	} )
} )

module.exports = vaccinationsRouter