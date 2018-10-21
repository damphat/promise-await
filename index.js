const lib = require('./build/Release/uvloop');

function log() { }

function awaitPromise(promise) {
    var done = false;
    var result;

    promise.then((value) => {
        log('wait-resolve');
        done = 'ok';
        result = value;
    }).catch((err) => {
        log('wait-reject');
        done = 'err';
        result = err;
    });

    log('wait-begin');

    while (!done) {
        log('wait-loop-ticks');
        process._tickCallback();
        if (done) break;
        log('wait-loop-run');
        lib.uvRunOnce();
    }
    log('wait-end');


    if (done == 'err') throw result;
    return result;
}

Promise.prototype.await = function () {
    return awaitPromise(this);
};

module.exports = () => {
    throw new Error('Please use method .await() on promise directly. For examples:\nvar ret = promise.await();\nvar ret = asyncFunc().await();');
};
