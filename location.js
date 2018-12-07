const axios = require('axios');

module.exports = async () => {
    const results = await axios({
        method: 'get',
        url: 'https://www.iplocation.net/',
    });

    const { city, region } = results.data;
    return `${city}, ${region}`;
};