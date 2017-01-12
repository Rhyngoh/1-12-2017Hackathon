// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var SearchHistory = new Schema({
  input: {
    type: String,
    required: true

  },
  date: {
    type: String
  }
});

// Create the Model
var History = mongoose.model("History", SearchHistory);

// Export it for use elsewhere
module.exports = History;
