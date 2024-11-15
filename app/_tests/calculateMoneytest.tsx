

import { expect, test, describe } from 'vitest';

import {calculateMoney} from '../lib/utils'


describe('testing calculateMoney function', () => {
  
    test('adding money', () => {
        expect(calculateMoney('2.00', '4.50', 'add')).toEqual('6.50');
    })

    test('subtracting money', () => {
        expect(calculateMoney('2.00', '3.00', 'subtract')).toEqual('-1.00');
    })
})