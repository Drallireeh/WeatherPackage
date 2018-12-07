const figlet = require('figlet');
const chalk = require('chalk');
const minimist = require('minimist');

const help_menu = require("./help.js");

app = {
	title: figlet.textSync('Weather Channel', "Ogre"),
	log_title: function () {
		console.log(chalk.green(this.title));
	}
}

app.log_title();
const arg = GetArgs();

function GetArgs() {
	return minimist(process.argv.slice(2));
}

function CheckSettings(args) {
	let settings = args._[0] || 'help';

	if (args.help || args.h) {
		settings = 'help';
	}

	switch (settings) {
		case 'today':
			require('./today')(args);
			break
		case 'help':
			help_menu(args);
			break;
		case 'week':
			require('./week')(args);
			break;
		default:
			console.error(`${settings} is not a valid command! type help to have some tips`);
			break
	}
}

CheckSettings(arg);