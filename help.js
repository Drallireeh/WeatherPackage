const menus = {
    main: `
        node index.js [command] <options>
  
        today       ----------      show weather for today
        week        ----------      show weather for a week since today
        help        ----------      show help menu for a command

        You'll need your api_key if you wan't your computer to find location by himself.`,

    today: `
        node index.js today <options>
  
        --location, -l  ----------      the location to use. (ex : "Paris, Île-de-France")`,
    week: `
        node index.js week <options>

        --location, -l  ----------      the location to use. (ex : "Paris, Île-de-France")`,
};

module.exports = (args) => {
    const sub_settings = args._[0] === 'help' ? args._[1] : args._[0];

    console.log(menus[sub_settings] || menus.main);
};