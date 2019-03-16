const runner = require('./index');
describe("Test",()=>{
    test("8 should be return VIII",()=>{
        expect(runner("VIII")).toEqual(8);
    })
})