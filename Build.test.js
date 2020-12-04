const { failedTest } = require('./Build');

describe('make a failed test function', () => {
    const allTheFails = 'you fail';
    it('is not a good function so it will fail', () => {
        const expected = failedTest(allTheFails);

        expect(expected).toEqual('you fail');
    });
});