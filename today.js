const ora = require('ora');
const getWeather = require('./weather.js');

module.exports = async (args) => {
    const spinner = ora().start();

    try {
        const location = args.location || args.l;
        const weather = await getWeather(location);
        weather.condition.temp = Math.round((weather.condition.temp - 32) * 5 / 9);

        spinner.stop();

        console.log(`Current conditions in ${location}:`);
        console.log(`\t${weather.condition.temp}° ${weather.condition.text}`);
    } catch (err) {
        spinner.stop();

        console.error(err);
    }
}