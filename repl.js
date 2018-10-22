require('.');

async function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

async function print(msg, duration = 1000) {
    let ms = duration / msg.length;
    for(let c of msg) {
        await sleep(ms);
        process.stdout.write(c);
    }
}

var server = require('repl').start({
    prompt: '>',
    useGlobal: true
});

Object.assign(server.context, {
    sleep,
    print,  
    help: function() {
        print('>', 0).await();
        print('console\b\b\b\b\b\b\bprint(', 2000).await();
        print('"print char by char in 2000 ms", 2000)\n', 1000).await();
        sleep(500).await();
        print('print char by char in 2000 ms\n', 2000).await();
        print('>', 0).await();
        sleep(2000).await();
        print('sleep(1000)  // return a promise\n', 1000).await();
        print('  [Promise]\n>', 100).await();
        sleep(1000).await();
        print('sleep(1000).await()   // block thread\n', 1000).await();
        sleep(1000).await();
    }
});

server.write('console.log(help())\n');
