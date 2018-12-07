const ora = require('ora');
const getWeather = require('./weather');

module.exports = async (args) => {
    const spinner = ora().start();

    try {
        const location = args.location || args.l;
        const weather = await getWeather(location);

        spinner.stop();

        console.log(`Weather week for ${location}:`);
        weather.forecast.every(function (item) {
            console.log(`\t${item.date} - Low: ${Math.round((item.low - 32) * 5 / 9)}°  | High: ${Math.round((item.high - 32) * 5 / 9)}°    | ${item.text}`);
            if (item === weather.forecast[6]) return false;
            return true;
        });
    } catch (err) {
        spinner.stop();

        throw err;
    }
};