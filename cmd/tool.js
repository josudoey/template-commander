module.exports = function (prog) {

  prog
    .command('hello [msg]')
    .option('-n, --name <name>', 'show name', 'alice')
    .description('only example')
    .action(function (msg, opts) {
      msg = msg || ''
      console.log(opts.name + ': hello!' + msg)
    })
}

