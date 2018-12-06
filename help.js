const menus = {
    main: `
        outside [command] <options>
  
        today     ............    show weather for today
        forecast  ............    show weather for a week since today
        help      ............    show help menu for a command`,

    today: `
        outside today <options>
  
        --location, -l .......    the location to use`,
    week: `
        outside week <options>

        --location, -l ..... the location to use`,
};

module.exports = (args) => {
    const sub_settings = args._[0] === 'help'
        ? args._[1]
        : args._[0]

    console.log(menus[sub_settings] || menus.main)
};