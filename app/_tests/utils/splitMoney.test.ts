import { splitMoney } from '../../lib/utils';

describe('splitMoney', () => {
    test('"10.00" should result in ["10", "00"]', () => {
        expect(splitMoney('10.00')).toStrictEqual(['10', '00']);
    });
    test('"20.20" should result in ["20", "20"]', () => {
        expect(splitMoney('20.20')).toStrictEqual(['20', '20']);
    });
    test('"11.00" should result in ["11", "00"]', () => {
        expect(splitMoney('11.00')).toStrictEqual(['11', '00']);
    });
    test('"11" should result in ["11"]', () => {
        expect(splitMoney('11')).toStrictEqual(['11', undefined]);
    });
});
