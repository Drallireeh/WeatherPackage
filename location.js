const axios = require('axios');

module.exports = async () => {
    const results = await axios({
        method: 'get',
        url: 'https://api.ipdata.co',
        params: {
            'api-key': "ae0094c2019a8df465a8448b24d1789bbcf33af9cca86c8d77530a0b"
        }
    });

    const { city, region } = results.data;
    return `${city}, ${region}`;
};