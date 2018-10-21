require('.');

const fs = require('fs').promises;

var server = require('repl').start({
    prompt: '>',
    useGlobal: true
});

Object.assign(server.context, {
    fs,  
    help: function() {
      
        // eslint-disable-next-line no-console
        console.log(`
        
        fs.readdir('missingFolder/').await();   // throw not found
        
        fs.readdir('.').await();     // return array

        Promise.resolve(1).await();  // return 1

        Promise.reject("the reason") // throw "the reason"

        `);
    }
});

server.write('console.log(help())\n');
