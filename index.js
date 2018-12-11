const figlet = require('figlet');
const chalk = require('chalk');
const minimist = require('minimist');

const help_menu = require("./help.js");
const today_option = require('./today');
const week_option = require('./week');

app = {
	title: figlet.textSync('Weather Channel', "Ogre"),
	log_title: function () {
		console.log(chalk.green(this.title));
	}
}

app.log_title();

function GetArgs() {
	return minimist(process.argv.slice(2));
}

function CheckCommand(args) {
	let command = args._[0] || 'help';

	if (args.help || args.h) {
		command = 'help';
	}

	switch (command) {
		case 'today':
			today_option(args);
			break
		case 'help':
			help_menu(args);
			break;
		case 'week':
			week_option(args);
			break;
		default:
			console.error(`${command} is not a valid command! type help to have some tips`);
			break
	}
}

const arg = GetArgs();
CheckCommand(arg);