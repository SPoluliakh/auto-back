const {Schema, model} = require('mongoose')


const lotsSchema = new Schema({
	"car_auction_data": {
		"best_buyer_name": String,
		"lot_link": String,
		"lot_number": String,
		"lot_seller": String,
		"lot_auction_data": {
		"auction_end_date": String,
		"auction_start_date": String,
		"lot_auction_time_dict": {
			"auction_end_date": String,
			"auction_start_date": String,
			"auction_status": {
				"available": Boolean,
				"not_sold": {
				"auction_bid": Boolean,
				"buy_now": Boolean,
				"reserve_not_met": Boolean
			},
			"sold": {
				"auction_bid": Boolean,
				"buy_now": Boolean,
				"reserve_met": Boolean,
				"reserve_not_met": Boolean
			}
			}
		},
		"lot_bid_dict": {
			"auction_fee": Number,
			"buy_now_clear_profit": Number,
			"buy_now_fee": Number,
			"lot_buy_now_price": Number,
			"lot_clear_profit": Number,
			"lot_condition_report": String,
			"lot_current_bid": Number,
			"lot_delivery_price": Number,
			"lot_increment_bid": Number,
			"lot_minimum_bid": Number,
			"lot_sell_max_offer": Number,
			"lot_starting_bid": Number
		}
		}
	},
	"car_data": {
		"lot_car_fax_link": String,
		"lot_color": String,
		"lot_damage_type": {
			"exterior": String,
			"interior": String,
			"mechanical": String,
			"tire_condition": String
		},
		"lot_drive_type": String,
		"lot_engine_dict": {
			"charge_type": String,
			"configuration": String,
			"cylinders": String,
			"displacement": String,
			"engine_id": String,
			"fuel_type": String,
			"hp": String
		},
		"lot_factory_body_code": String,
		"lot_keys": String,
		"lot_make": String,
		"lot_model": String,
		"lot_odometer": Number,
		"lot_pictures": {
			"lot_base_pictures_list": [String],
			"lot_pictures_list": [String]
		},
		"lot_title_status": String,
		"lot_transmission": {
			"transmission_speeds": String,
			"transmission_type": String
		},
		"lot_trim": String,
		"lot_truck_cab_type": String,
		"lot_type": String,
		"lot_vin": String,
		"lot_year": String
	},
	"location_dict": {
		"delivery_location_dict": {
			"delivery_city": String,
			"delivery_latitude": String,
			"delivery_longitude": String,
			"delivery_state_code": String,
			"delivery_state_name": String,
			"delivery_zip": String
		},
		"lot_location_dict": {
			"lot_Lane/Item/Grid/Row": String,
			"lot_latitude": String,
			"lot_location_city": String,
			"lot_location_state_code": String,
			"lot_location_state_name": String,
			"lot_location_zip": String,
			"lot_longitude": String
		}
	},
	"statistics_data": {
		"offers_list": [
		{
			"bayer_name": String,
			"delivery_location_dict": {
				"delivery_city": String,
				"delivery_latitude": String,
				"delivery_longitude": String,
				"delivery_state_code": String,
				"delivery_state_name": String,
				"delivery_zip": String
			},
			"delivery_price": Number,
			"offer": Number,
			"profit_offer": Number
		}
		]
	}
}, {
	versionKey: false,
	timestamps: true,
})

const Lot = model('lot', lotsSchema)

module.exports = Lot


// {'car_auction_data': {'best_buyer_name': 'enterprise',
// 'lot_link': 'https://www.crankyape.com/default.asp?pg=DispSingleItem&ItemNumber=127637',
// 'lot_number': '27637',
// 'lot_seller': 'crankyape'},
// 'car_data': {'lot_car_fax_link': None,
// 'lot_color': None,
// 'lot_damage_type': {'exterior': 'Damage to the passenger quarter '
// 						'panel. The rear bumper is '
// 						'crooked. Paint chipping on the '
// 						'rear passenger side. See '
// 						'pictures for cosmetic '
// 						'blemishes. CLICK HERE TO SEE A '
// 						'VIDEO OF THE ENGINE RUNNING. '
// 						'*This unit has a Prior Salvage '
// 						'title.',
// 			'interior': None,
// 			'mechanical': None,
// 			'tire_condition': 'Good / 75% tread.'},
// 'lot_drive_type': None,
// 'lot_engine_dict': {'charge_type': None,
// 			'configuration': 'V-Shaped',
// 			'cylinders': '6',
// 			'displacement': '3.7',
// 			'engine_id': None,
// 			'fuel_type': 'Gasoline',
// 			'hp': '305'},
// 'lot_factory_body_code': None,
// 'lot_keys': None,
// 'lot_make': 'FORD',
// 'lot_model': 'Mustang',
// 'lot_odometer': 90315,
// 'lot_pictures': {'lot_base_pictures_list': ['https://i.fuelapi.com/a9763d8fbf644e5d80de0bf8aef5e75c/6847/1/17/stills_0640_png/MY2012/7996/7996_st0640_037.png',
// 									'https://i.fuelapi.com/a9763d8fbf644e5d80de0bf8aef5e75c/6847/1/17/stills_0640_png/MY2012/7996/7996_st0640_116.png',
// 									'https://i.fuelapi.com/a9763d8fbf644e5d80de0bf8aef5e75c/6847/1/17/stills_0640_png/MY2012/7996/7996_st0640_120.png',
// 									'https://i.fuelapi.com/a9763d8fbf644e5d80de0bf8aef5e75c/6847/1/17/stills_0640_png/MY2012/7996/7996_st0640_121.png',
// 									'https://i.fuelapi.com/a9763d8fbf644e5d80de0bf8aef5e75c/6847/1/17/stills_0640_png/MY2012/7996/7996_st0640_159.png'],
// 		 'lot_pictures_list': ['https://www.crankyape.com//Images/UnitImages/1485/1485672.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485674.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485676.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485678.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485680.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485682.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485684.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485686.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485688.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485690.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485692.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485694.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485696.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485698.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485700.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485702.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485704.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485706.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485708.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485710.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485712.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485714.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485716.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485718.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485720.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485722.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485724.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485726.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485728.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485730.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485732.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485734.jpg',
// 							   'https://www.crankyape.com//Images/UnitImages/1485/1485736.jpg']},
// 'lot_title_status': 'prior salvage',
// 'lot_transmission': {'transmission_speeds': None,
// 			 'transmission_type': 'automatic'},
// 'lot_trim': 'V6 Convertible',
// 'lot_truck_cab_type': None,
// 'lot_type': 'PASSENGER CAR',
// 'lot_vin': '1ZVBP8EM5C5212668',
// 'lot_year': '2012'},
// 'location_dict': {'delivery_location_dict': {'delivery_city': 'Burnsville',
// 						'delivery_latitude': '44.780472',
// 						'delivery_longitude': '-93.27563',
// 						'delivery_state_code': 'MN',
// 						'delivery_state_name': 'Minnesota',
// 						'delivery_zip': '55337'},
// 'lot_location_dict': {'lot_Lane/Item/Grid/Row': None,
// 				   'lot_latitude': '44.729417',
// 				   'lot_location_city': 'Hastings',
// 				   'lot_location_state_code': 'MN',
// 				   'lot_location_state_name': 'Minnesota',
// 				   'lot_location_zip': '55033',
// 				   'lot_longitude': '-92.884737'}},
// 'lot_auction_data': {'auction_end_date': 'Wednesday, April 24, 2024 06:00:00 '
// 					'PM (UTC)',
// 'auction_start_date': 'Wednesday, April 17, 2024 '
// 					  '08:00:00 PM (UTC)',
// 'lot_auction_time_dict': {'auction_end_date': None,
// 						  'auction_start_date': None,
// 						  'auction_status': {'available': True,
// 											 'not_sold': {'auction_bid': False,
// 														  'buy_now': False,
// 														  'reserve_not_met': False},
// 											 'sold': {'auction_bid': False,
// 													  'buy_now': False,
// 													  'reserve_met': False,
// 													  'reserve_not_met': True}}},
// 'lot_bid_dict': {'auction_fee': 509.45000000000005,
// 				 'buy_now_clear_profit': None,
// 				 'buy_now_fee': None,
// 				 'lot_buy_now_price': None,
// 				 'lot_clear_profit': 1756.0699999999997,
// 				 'lot_condition_report': None,
// 				 'lot_current_bid': 4405.0,
// 				 'lot_delivery_price': 431.48,
// 				 'lot_increment_bid': 25.0,
// 				 'lot_minimum_bid': 4430.0,
// 				 'lot_sell_max_offer': 7127,
// 				 'lot_starting_bid': 25.0}},
// 'statistics_data': {'offers_list': [{'bayer_name': 'enterprise',
// 				'delivery_location_dict': {'delivery_city': 'Burnsville',
// 										   'delivery_latitude': '44.780472',
// 										   'delivery_longitude': '-93.27563',
// 										   'delivery_state_code': 'MN',
// 										   'delivery_state_name': 'Minnesota',
// 										   'delivery_zip': '55337'},
// 				'delivery_price': 431.48,
// 				'offer': 7127,
// 				'profit_offer': 6695.52},
// 			   {'bayer_name': 'carvana',
// 				'delivery_location_dict': {'delivery_city': 'Saint '
// 															'Paul',
// 										   'delivery_latitude': 44.8471,
// 										   'delivery_longitude': -93.1543,
// 										   'delivery_state_code': 'MN',
// 										   'delivery_state_name': 'Minnesota',
// 										   'delivery_zip': '55121'},
// 				'delivery_price': 424.63,
// 				'offer': 300.0,
// 				'profit_offer': -124.63}]}}