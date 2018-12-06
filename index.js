const chalk = require('chalk');
const prompt = require('prompt');

prompt.start();

prompt.get(["folder"], function(err, result) {
    console.log(chalk.blue(result.folder));
})