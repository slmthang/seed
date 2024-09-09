


import { budgetPlanIncomeType, budgetPlanExpenseListType, subscriptionsExpenseListType, trackerIncomeListType, trackerExpenseListType, savingsExpenseListType } from "../ui/components/definitions"

import { expect, test, describe } from 'vitest';

import { calculateTotal } from '../lib/utils';

let budgetPlanIncomeData : budgetPlanIncomeType = '2000';
const budgetPlanExpenseListData : budgetPlanExpenseListType = [
    {
    name: 'KFC',
    amount: '30.00',
    category: 'food'
    }
]

const subscriptionsExpenseListData : subscriptionsExpenseListType = [
    {
        name: 'Netflix',
        amount: '15.00',
        category: 'TV',
        isActive: true,
        recurring: {
            isTrue: true,
            frequency: 'monthly'
        },
        date: '11/02/2024'
    },
    {
        name: 'Netflix',
        amount: '115.00',
        category: 'TV',
        isActive: true,
        recurring: {
            isTrue: true,
            frequency: 'monthly'
        },
        date: '11/02/2024'
    }
]

const trackerIncomeListData : trackerIncomeListType = [
    {
        type: 'occupation',
        amount: '3000.00',
        recurring: {
            isTrue: true,
            frequency: 'monthly'
        },
        date: '12/01/2024'
    },
    {
        type: 'occupation',
        amount: '450.00',
        recurring: {
            isTrue: true,
            frequency: 'monthly'
        },
        date: '12/01/2024'
    }
]

const trackerExpenseListData : trackerExpenseListType = [
    {
        name: 'Concert',
        amount: '3000.00',
        category: 'Fun',
        date: '12/01/2024'
    }
]

const savingsExpenseListData : savingsExpenseListType = [
    {
        goal: 'Tuition',
        amount: '3000.00',
        memo: 'xxx',
        recurring: {
            isTrue: true,
            frequency: 'monthly'
        },
        date: '12/01/2024'
    }
]


describe('testing calculateTotalExpenses function', () => {
  
    test('total subscriptionsExpenseList', () => {
        expect(calculateTotal(subscriptionsExpenseListData)).toEqual('130.00');
    })

    test('total trackerExpenseList', () => {
        expect(calculateTotal(trackerIncomeListData)).toEqual('3450.00');
    })
})