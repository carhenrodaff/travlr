const moongoose = require('mongoose');

//Define the trip schema
const tripSchema = new moongoose.Schema({
    code: { type: String, required: true, index: true},
    name: { type: String, required: true, index: true},
    length: { type: String, required: true},
    start: { type: Date, required: true},
    resort: { type: String, required: true},
    perPerson: { type: String, required: true},
    image: { type: String, required: true},
    description: { type: String, required: true}
});
module.exports = moongoose.model('trips', tripSchema);