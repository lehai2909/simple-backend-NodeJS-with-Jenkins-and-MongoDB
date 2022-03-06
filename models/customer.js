var mongoose = require("mongoose")
var Schema = mongoose.Schema
var CustomerSchema = new Schema(
    {
        first_name: {type: String, required: true, maxLength: 100},
        last_name: {type: String, required: true, maxLength: 100},
        email: {type: String, required: true, maxLength: 100}
    }
)

module.exports = mongoose.model('Customer', CustomerSchema);