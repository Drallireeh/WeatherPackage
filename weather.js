const axios = require('axios');

// Get weather using location

// Request yahoo weather api for the current weather of a location. I use yahoo because it's a publi api key
module.exports = async (location) => {
    const results = await axios({
        method: 'get',
        url: 'https://query.yahooapis.com/v1/public/yql',
        params: {
            format: 'json',
            q: `select item from weather.forecast where woeid in
          (select woeid from geo.places(1) where text="${location}")`,
        },
    });

    return results.data.query.results.channel.item;
};