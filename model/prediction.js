
var knexClass = require('knex');
var Config = require('../knexfile');
var BaseModel = require('./base');



class Supplier extends BaseModel {
	static get tableName() {
		return 'prediction';
	}

}

module.exports = Supplier;
