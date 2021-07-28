const ordersRouter = require( 'express' ).Router()
const Order = require( '../models/order' )

ordersRouter.get( '/', ( req, res ) => {
	Order.find( { arrived: '2021-01-11T08:59:28.642790Z' } ).then( result => {
		res.json( result )
	} )
} )

module.exports = ordersRouter