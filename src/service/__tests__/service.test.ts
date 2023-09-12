import { service } from '../service';

describe('service', () => {
    it('returns some text', () => {
        const expected = 'service test';
        const actual = service();

        expect(actual).to.equal(expected);
    });
});
