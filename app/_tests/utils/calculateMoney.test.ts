import { calculateMoney } from '../../lib/utils';

describe('calculateMoney ', () => {
    describe('add ', () => {
        test('"20.00 + 30.00" should result in "50.00"', () => {
            expect(calculateMoney('20.00', '30.00', 'add')).toBe('50.00');
        });
        test('"-5.00 + 30.00" should result in "25.00"', () => {
            expect(calculateMoney('-5.00', '30.00', 'add')).toBe('25.00');
        });
    });
    describe('subtract ', () => {
        test('"20.00 - 30.00" should result in "-10.00"', () => {
            expect(calculateMoney('20.00', '30.00', 'subtract')).toBe('-10.00');
        });
        test('"20.00 - 10.00" should result in "10.00"', () => {
            expect(calculateMoney('20.00', '10.00', 'subtract')).toBe('10.00');
        });
    });
});
