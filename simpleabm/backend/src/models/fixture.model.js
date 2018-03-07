// // fixture-model.js - A mongoose model
// // 
// // See http://mongoosejs.com/docs/models.html
// // for more of what you can do here.
// module.exports = function (app) {
// 	const mongooseClient = app.get('mongooseClient');
// 	const { Schema } = mongooseClient;
// 	const fixture = new Schema({
// 		text: { type: String, required: true }
// 	}, {
// 		timestamps: true
// 	});

// 	return mongooseClient.model('fixture', fixture);
// };


require('mongoose-type-email');

module.exports = function (app) {
	const mongooseClient = app.get('mongooseClient');
	const contact = new mongooseClient.Schema({
		usuario : {
			type: String,
			required: [true, 'Usuario es requerido']
		},
		equipo : {
			type: String,
			required: [true, 'Equipo es requerido']
		},
		createdAt: { type: Date, 'default': Date.now },
		updatedAt: { type: Date, 'default': Date.now }
	});

	return mongooseClient.model('contact', contact);
};