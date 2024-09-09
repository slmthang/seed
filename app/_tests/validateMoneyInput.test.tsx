

import { expect, test, describe } from 'vitest';

import { validateMoneyInput } from '../lib/utils';


describe('testing addMoneyTwo function', () => {
  
    test('without decimal', () => {
        expect(validateMoneyInput('2')).toEqual('2.00');
    })

    test('with decimal', () => {
        expect(validateMoneyInput('2.00')).toEqual('2.00');
    })
})