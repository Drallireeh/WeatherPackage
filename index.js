const figlet = require('figlet');
const chalk = require('chalk');
const minimist = require('minimist');

const help_menu = require("./help.js");

module.exports = () => {
	const args = minimist(process.argv.slice(2))
	console.log(process.argv)
}

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
	let settings = args._[0] || 'help'

	if (args.help || args.h) {
		settings = 'help'
	}

	switch (settings) {
		case 'today':
			console.log("today is sunny");
			break
		case 'help':
			help_menu(args);
			break;
		case 'week':
			console.log('week');
			break;
		default:
			console.error(`${settings} is not a valid command! type help to have some tips`)
			break
	}
}

CheckSettings(arg);