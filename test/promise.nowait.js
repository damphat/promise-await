var assert = require('assert');

describe('nowaitPromise.await()', ()=> {
    it('return the value', ()=>{
        let promise = Promise.resolve('the value');

        assert.equal(promise.await(), 'the value');
        assert.equal(promise.await(), 'the value');
    });

    it('throw error', ()=>{
        let promise = Promise.reject('the reason');

        assert.throws(() => promise.await(), /the reason/);
        assert.throws(() => promise.await(), /the reason/);
    });
});
