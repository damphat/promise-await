var assert = require('assert');

async function makeAValue() {
    return 'the value';
}

async function throwError() {
    throw 'the reason';
}

describe('asyncFunction().await()', ()=> {
    it('should return the value', ()=>{
        assert.equal(makeAValue().await(), 'the value');
        assert.equal(makeAValue().await(), 'the value');
    });

    it('should throw error', ()=>{
        assert.throws(() => throwError().await(), /the reason/);
        assert.throws(() => throwError().await(), /the reason/);
    });
});
