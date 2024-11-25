import { capitalizeString } from '../../lib/utils';

describe('capitalizeString', () => {
    test('"he goes there" should result in "He Goes There"', () => {
        expect(capitalizeString('he goes there')).toBe('He Goes There');
    });
    test('"peter" should result in "Peter"', () => {
        expect(capitalizeString('peter')).toBe('Peter');
    });
});
