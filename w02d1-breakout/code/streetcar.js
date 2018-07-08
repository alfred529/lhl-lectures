var request = require('request');

var options = {
  url: 'http://webservices.nextbus.com/service/publicJSONFeed?command=predictions&a=ttc&r=504&s=23895',
  headers: {
    'User-Agent': 'myawesomeapp'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    var stopTitle = info.predictions.stopTitle;
    var vehicle = info.predictions.direction[0].title;
    var predictions = info.predictions.direction[0].prediction.slice(0, 3);
    console.log('Stop:', stopTitle);
    console.log('Vehicle:', vehicle);
    predictions.forEach(function(prediction) {
      console.log(prediction.minutes + ' minutes away');
    });
  }
}

request(options, callback);