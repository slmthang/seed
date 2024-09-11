
import { budgetPlanIncomeType, budgetPlanExpenseListType, subscriptionsExpenseListType, trackerIncomeListType, trackerExpenseListType, savingsExpenseListType } from "../ui/components/definitions"



export let budgetPlanIncomeData : budgetPlanIncomeType = '2000';
export const budgetPlanExpenseListData : budgetPlanExpenseListType = [
    {
        name: 'Grocery',
        amount: '30.00',
        category: 'food'
    },
    {
        name: 'Gas',
        amount: '100.00',
        category: 'Utility'
    },
    {
        name: 'Auto Insurance',
        amount: '300.00',
        category: 'Insurance'
    },
    {
        name: 'Student Loan',
        amount: '100.00',
        category: 'Debt'
    },
    {
        name: 'Rent',
        amount: '1000.00',
        category: 'Utility'
    },
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
        name: 'Amazon',
        amount: '100.00',
        category: 'General',
        isActive: true,
        recurring: {
            isTrue: true,
            frequency: 'monthly'
        },
        date: '11/02/2024'
    },
    {
        name: 'Disney',
        amount: '40.00',
        category: 'TV',
        isActive: true,
        recurring: {
            isTrue: true,
            frequency: 'monthly'
        },
        date: '11/02/2024'
    },
    {
        name: 'Spotify',
        amount: '100.00',
        category: 'Music',
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
        type: 'Occupation',
        amount: '3000.00',
        category: 'income',
        recurring: {
            isTrue: true,
            frequency: 'monthly'
        },
        date: '12/01/2024'
    },
    {
        type: 'Door Dash',
        amount: '400.00',
        category: 'income',
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
        amount: '300.00',
        category: 'Fun',
        date: '08/01/2024'
    },
    {
        name: 'Gas',
        amount: '30.00',
        category: 'Utility',
        date: '09/11/2024'
    },
    {
        name: 'Grocery',
        amount: '300.00',
        category: 'Food',
        date: '10/01/2024'
    },
    {
        name: 'Lottery Ticket',
        amount: '30.00',
        category: 'Fun',
        date: '11/01/2024'
    },
    {
        name: 'CC Payment',
        amount: '1200.00',
        category: 'Debt',
        date: '11/05/2024'
    }
]

export const savingsExpenseListData : savingsExpenseListType = [
    {
        name: 'Contribution #1',
        amount: '30.00',
        category: 'Tuition',
        recurring: {
            isTrue: true,
            frequency: 'monthly'
        },
        date: '12/01/2024'
    },
    {
        name: 'Contribution #2',
        amount: '100.00',
        category: 'Tuition',
        recurring: {
            isTrue: true,
            frequency: 'monthly'
        },
        date: '12/01/2024'
    },
    {
        name: 'Contribution #3',
        amount: '250.00',
        category: 'Tuition',
        recurring: {
            isTrue: true,
            frequency: 'monthly'
        },
        date: '12/01/2024'
    },
    {
        name: 'Contribution #4',
        amount: '300.00',
        category: 'Tuition',
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