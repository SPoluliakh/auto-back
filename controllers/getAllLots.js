// const Lot = require('../models/lots')


// const getAllLots = async(req, res) => {
// 	const {page = 1, limit = 21} = req.query
// 	const {make} = req.params
// 	let query = {}
// 	let lots = []
// 	if(make && make !== 'all'){
// 		const makeArray = make.split(',')
// 		query = {'car_data.lot_model': {$in: makeArray}}
// 	const skip = (page - 1) * limit
// 	lots = await Lot.find(query).skip(skip).limit(+limit)
// 		if(lots.length === 0)
// 		{
// 			query = {'car_data.lot_make': {$in: makeArray}}
// 			const skip = (page - 1) * limit
// 			lots = await Lot.find(query).skip(skip).limit(+limit)
// 		}}
// 		if(lots.length === 0)
// 		{
// 			query = {'car_data.lot_trim': {$in: makeArray}}
// 			const skip = (page - 1) * limit
// 			lots = await Lot.find(query).skip(skip).limit(+limit)
// 		}} 
// 	else if (make === 'all')
// 	{
// 		const skip = (page - 1) * limit
// 		lots = await Lot.find(query).skip(skip).limit(+limit)
// 	}
// 	// const skip = (page - 1) * limit
// 	// lots = await Lot.find(query).skip(skip).limit(+limit)
// 	res.status(200).json({
// 		message: 'Success',
// 		lots
// 	})
// } 

// module.exports = getAllLots
const Lot = require('../models/lots')


const getAllLots = async (req, res) => {
    const { page = 1, limit = 21 } = req.query
    const { make } = req.params
    let query = {}
    let lots = []

    if (make && make !== 'all') 
	{
        const makeArray = make.split(',')
        query = { 'car_data.lot_model': { $in: makeArray } }
        const skip = (page - 1) * limit
        lots = await Lot.find(query).skip(skip).limit(+limit)
        
        if (lots.length === 0) 
		{
            query = { 'car_data.lot_make': { $in: makeArray } }
            lots = await Lot.find(query).skip(skip).limit(+limit)
        }

        if (lots.length === 0) 
		{
            query = { 'car_data.lot_trim': { $in: makeArray } }
            lots = await Lot.find(query).skip(skip).limit(+limit)
        }
    } 
	else if (make === 'all') 
	{
        const skip = (page - 1) * limit
        lots = await Lot.find(query).skip(skip).limit(+limit)
    }

    res.status(200).json({
        message: 'Success',
        lots})
}

module.exports = getAllLots
