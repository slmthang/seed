
import { budgetPlanIncomeType, budgetPlanExpenseListType, subscriptionsExpenseListType, trackerIncomeListType, trackerExpenseListType, savingsExpenseListType } from "../ui/components/definitions"



export let budgetPlanIncomeData : budgetPlanIncomeType = '2000';
export const budgetPlanExpenseListData : budgetPlanExpenseListType = [
    {
    name: 'KFC',
    amount: '30.00',
    category: 'food'
    }
]

export const subscriptionsExpenseListData : subscriptionsExpenseListType = [
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
        amount: '100.00',
        category: 'TV',
        isActive: true,
        recurring: {
            isTrue: true,
            frequency: 'monthly'
        },
        date: '11/02/2024'
    }
]

export const trackerIncomeListData : trackerIncomeListType = [
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
        amount: '400.00',
        recurring: {
            isTrue: true,
            frequency: 'monthly'
        },
        date: '12/01/2024'
    }
]

export const trackerExpenseListData : trackerExpenseListType = [
    {
        name: 'Concert',
        amount: '3000.00',
        category: 'Fun',
        date: '12/01/2024'
    }
]

export const savingsExpenseListData : savingsExpenseListType = [
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




export const budgetPlanData = {
    income: budgetPlanIncomeData,
    expenses: budgetPlanExpenseListData
}