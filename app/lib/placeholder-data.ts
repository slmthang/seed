
import { budgetPlanIncomeType, budgetPlanExpenseListType, subscriptionsExpenseListType, trackerItemsListType, savingsExpenseListType } from "../ui/components/definitions"



export let budgetPlanIncomeData : budgetPlanIncomeType = '100.00';
export const budgetPlanExpenseListData : budgetPlanExpenseListType = [
    {
        name: 'Grocery',
        amount: '30.00',
        category: 'food'
    },
    {
        name: 'Gas',
        amount: '100.00',
        category: 'utilities'
    },
    {
        name: 'Auto Insurance',
        amount: '300.00',
        category: 'insurance'
    },
    {
        name: 'Student Loan',
        amount: '100.00',
        category: 'debt'
    },
    {
        name: 'Rent',
        amount: '1000.00',
        category: 'utilities'
    },
]

export const subscriptionsExpenseListData : subscriptionsExpenseListType = [
    {
        name: 'Netflix',
        amount: '15.00',
        category: 'TV',
        paymentDay: '5'
    },
    {
        name: 'Amazon',
        amount: '100.00',
        category: 'General',
        paymentDay: '9'
    },
    {
        name: 'Disney',
        amount: '40.00',
        category: 'TV',
        paymentDay: '20'
    },
    {
        name: 'Spotify',
        amount: '100.00',
        category: 'Music',
        paymentDay: '12'
    }
]

export const trackerItemsListData : trackerItemsListType = [
    {
        name: 'Occupation',
        amount: '3000.00',
        isExpense: false,
        category: 'income',
        date: '12/01/2024'
    },
    {
        name: 'Door Dash',
        amount: '400.00',
        isExpense: false,
        category: 'income',
        date: '12/01/2024'
    },
    {
        name: 'Concert',
        amount: '300.00',
        category: 'Fun',
        isExpense: true,
        date: '08/01/2024'
    },
    {
        name: 'Gas',
        amount: '30.00',
        category: 'Utility',
        isExpense: true,
        date: '09/11/2024'
    },
    {
        name: 'Grocery',
        amount: '300.00',
        category: 'Food',
        isExpense: true,
        date: '10/01/2024'
    },
    {
        name: 'Lottery Ticket',
        amount: '30.00',
        category: 'Fun',
        isExpense: true,
        date: '11/01/2024'
    },
    {
        name: 'CC Payment',
        amount: '1200.00',
        category: 'Debt',
        isExpense: true,
        date: '11/05/2024'
    }
]


export const savingsExpenseListData : savingsExpenseListType = [
    {
        name: 'Contribution #1',
        amount: '30.00',
        category: 'Tuition',
        date: '12/01/2024'
    },
    {
        name: 'Contribution #2',
        amount: '100.00',
        category: 'Tuition',
        date: '12/01/2024'
    },
    {
        name: 'Contribution #3',
        amount: '250.00',
        category: 'Tuition',
        date: '12/01/2024'
    },
    {
        name: 'Contribution #4',
        amount: '300.00',
        category: 'Tuition',
        date: '12/01/2024'
    }
    
]


export const budgetPlanData = {
    income: budgetPlanIncomeData,
    expenseList: budgetPlanExpenseListData
}