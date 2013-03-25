var path = require('path'),
    pkg = require('../../package.json'),
    version = pkg.version,
    program = require('commander');

program
    .version(version)
    .parse(process.argv);

require('./make.js')(program);
require('./server.js')(program);

if (!program.args.length) {
    program.outputHelp();
}

program.command('*')
    .action(function() {
        program.outputHelp();
    });

program.parse(process.argv);