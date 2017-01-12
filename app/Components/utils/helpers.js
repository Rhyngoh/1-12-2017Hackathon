// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Geocoder API
var geocodeAPI = "35e5548c618555b1a43eb4759d26b260";

// Helper Functions (in this case the only one is runQuery)
var helpers = {

  runQuery: function(location) {

    console.log(location);

    // Figure out the geolocation
    var queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;

    return axios.get(queryURL).then(function(response) {

      console.log(response);
      return response.data.results[0].formatted;
    });

  },

  saveToDB: function(searchTerm) {
  	console.log("inside the savetoDB function");
  	axios.post("/api", {searchTerm: searchTerm})
  	.then(function(response) {
  		console.log("Successfully saved search");
  	});
  },

  searchTermsFromDB: function() {
    return axios.get("/api")
    .then(function(response) {
      console.log(response);

      var terms = [];
      for (var i = 0; i < response.data.length; i++) {
        var currentSearch = {};
        currentSearch.input = response.data[i].input;
        currentSearch.date = response.data[i].date;
        console.log("current search: " + currentSearch);
        terms.push(currentSearch);
      }
      console.log(terms);
      return terms;
    });
  }

};

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;
