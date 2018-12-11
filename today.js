const ora = require('ora');
const getWeather = require('./weather.js');
const getLocation = require('./location.js');

module.exports = async (args) => {
    const loading_spin = ora().start();

    try {
        const location = args.location || args.l || await getLocation();
        const weather = await getWeather(location);

        weather.condition.temp = Math.round((weather.condition.temp - 32) * 5 / 9); // Convert kelvin into Celcius

        loading_spin.stop();

        console.log(`Current conditions in ${location}:`);
        console.log(`\t${weather.condition.temp}° ${weather.condition.text}`);
    } catch (err) {
        loading_spin.stop();

        console.error(err);
    }
};