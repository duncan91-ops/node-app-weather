const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiZHVuLWtpdGgta2ltIiwiYSI6ImNrcDJnM2NtbTF0bTEydnFnYXluY2hmYzIifQ.14nVNphxw5_5wnkAL_tC5Q&limit=1";
  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to the geocoding service");
    } else if (body.features.length === 0) {
      callback("Unknown location. Please try different location.");
    } else {
      const data = body.features[0];
      callback(undefined, {
        place_name: data.place_name,
        longitude: data.center[0],
        latitude: data.center[1],
      });
    }
  });
};

module.exports = geocode;
