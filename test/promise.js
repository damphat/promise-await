require('..');
const assert = require('assert');

describe('promise.await()', () => {
    it('should be a function', () => {
        let promise = new Promise(resolve => {
            resolve();
        });

        assert.equal(typeof promise.await, 'function');
    });

    it('should return the value if the promise is resolved', () => {
        let promise = new Promise((resolve) => {
            setTimeout(() => resolve('the value'), 100);
        });

        assert.equal(promise.await(), 'the value');
    });

    it('should throw the reason if the promise is rejected', () => {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => reject('the reason'), 100);
        });

        assert.throws(() => {
            promise.await();
        }, /the reason/);
    });

    it('should return the same values if await() is call multiple times', () => {
        let promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve('X');
            }, 100);
        });

        var r1 = promise.await();
        var r2 = promise.await();
        var r3 = promise.await();

        assert.deepEqual([r1, r2, r3], ['X', 'X', 'X']);
    });
});
