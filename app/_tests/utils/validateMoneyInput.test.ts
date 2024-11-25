import { validateMoneyInput } from '../../lib/utils';

describe('validateMoneyInput', () => {
    test('10 should result in 10.00', () => {
        expect(validateMoneyInput('10')).toBe('10.00');
    });
    test('10.00 should result in 10.00', () => {
        expect(validateMoneyInput('10.00')).toBe('10.00');
    });
    test('9.999 should result in 9.99', () => {
        expect(validateMoneyInput('9.999')).toBe('9.99');
    });
});
