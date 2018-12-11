const ora = require('ora');
const getWeather = require('./weather.js');
const getLocation = require('./location.js');

module.exports = async (args) => {
    const spinner = ora().start();

    try {
        const location = args.location || args.l || await getLocation()
        const weather = await getWeather(location)

        spinner.stop();

        console.log(`Weather week for ${location}:`);
        weather.forecast.every(function (weather_info) {
            console.log(`\t${weather_info.date} - Low: ${Math.round((weather_info.low - 32) * 5 / 9)}°  | High: ${Math.round((weather_info.high - 32) * 5 / 9)}°    | ${weather_info.text}`);
            if (weather_info === weather.forecast[6]) return false;
            return true;
        });
    } catch (err) {
        spinner.stop();

        console.error(err);
    }
};