const request = require("postman-request");

const forecast = (longitude, latitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key="+process.env.FORECAST_API_KEY+"&query=" +latitude+","+longitude + "&units=m";

  request({url, json: true }, (err,{body}) => {
    if (err) {
      callback("Unable to connect to web services", undefined);
    }
    else if (body.error) {
      callback(body.error.info, undefined);
    }
    else {
        const current_temp = body.current.temperature;
        const feellike_temp = body.current.feelslike;
        const weather_description = body.current.weather_descriptions;
      callback(undefined, (weather_description[0] + ". It is currently "+current_temp+" but feels like " + feellike_temp))
    }
  });
};

module.exports = forecast;