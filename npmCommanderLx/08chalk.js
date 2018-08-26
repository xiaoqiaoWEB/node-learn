const program = require('commander');
const fs = require('fs');
const chalk = require('chalk');

const log = console.log;

//log(chalk.blue('Hello') + ' World' + chalk.red('!'));

//log(chalk.blue.bgRed.bold('Hello world!'));

log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
