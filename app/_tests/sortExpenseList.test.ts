import { expenseDataType } from "../lib/definitions";
import { sortExpenseList } from "../lib/utils";


const expenseListData: expenseDataType[] = [
    {
        id: 345,
        budgetPlanID: 345,
        item: 'Car',
        amount: '29.00',
        category: 'Auto',
        createdAt: new Date(Date.UTC(96, 1, 2, 3, 4, 5))
    },
    {
        id: 345,
        budgetPlanID: 345,
        item: 'Grocery',
        amount: '25.00',
        category: 'Food',
        createdAt: new Date(Date.UTC(96, 1, 2, 3, 4, 5))
    },
    {
        id: 345,
        budgetPlanID: 345,
        item: 'Netflix',
        amount: '20.00',
        category: 'TV',
        createdAt: new Date(Date.UTC(96, 1, 2, 3, 4, 5))
    },
]

describe('testing sortExpenseList', () => {
    test('Amount: should be in ascending order', () => {
        expect(sortExpenseList(expenseListData, 'amount', 'asc')).toStrictEqual([
            {
                id: 345,
                budgetPlanID: 345,
                item: 'Netflix',
                amount: '20.00',
                category: 'TV',
                createdAt: new Date(Date.UTC(96, 1, 2, 3, 4, 5))
            },
            {
                id: 345,
                budgetPlanID: 345,
                item: 'Grocery',
                amount: '25.00',
                category: 'Food',
                createdAt: new Date(Date.UTC(96, 1, 2, 3, 4, 5))
            },
            {
                id: 345,
                budgetPlanID: 345,
                item: 'Car',
                amount: '29.00',
                category: 'Auto',
                createdAt: new Date(Date.UTC(96, 1, 2, 3, 4, 5))
            }
        ]);
    });

    test('Amount: should be in descending order', () => {
        expect(sortExpenseList(expenseListData, 'amount', 'desc')).toStrictEqual([
            {
                id: 345,
                budgetPlanID: 345,
                item: 'Car',
                amount: '29.00',
                category: 'Auto',
                createdAt: new Date(Date.UTC(96, 1, 2, 3, 4, 5))
            },
            {
                id: 345,
                budgetPlanID: 345,
                item: 'Grocery',
                amount: '25.00',
                category: 'Food',
                createdAt: new Date(Date.UTC(96, 1, 2, 3, 4, 5))
            },
            {
                id: 345,
                budgetPlanID: 345,
                item: 'Netflix',
                amount: '20.00',
                category: 'TV',
                createdAt: new Date(Date.UTC(96, 1, 2, 3, 4, 5))
            }
        ]);
    });

    test('Name: should be in ascending order', () => {
        expect(sortExpenseList(expenseListData, 'name', 'asc')).toStrictEqual([
            {
                id: 345,
                budgetPlanID: 345,
                item: 'Car',
                amount: '29.00',
                category: 'Auto',
                createdAt: new Date(Date.UTC(96, 1, 2, 3, 4, 5))
            },
            {
                id: 345,
                budgetPlanID: 345,
                item: 'Grocery',
                amount: '25.00',
                category: 'Food',
                createdAt: new Date(Date.UTC(96, 1, 2, 3, 4, 5))
            },
            {
                id: 345,
                budgetPlanID: 345,
                item: 'Netflix',
                amount: '20.00',
                category: 'TV',
                createdAt: new Date(Date.UTC(96, 1, 2, 3, 4, 5))
            }
        ]);
    });

    test('Name: should be in descending order', () => {
        expect(sortExpenseList(expenseListData, 'name', 'desc')).toStrictEqual([
            {
                id: 345,
                budgetPlanID: 345,
                item: 'Netflix',
                amount: '20.00',
                category: 'TV',
                createdAt: new Date(Date.UTC(96, 1, 2, 3, 4, 5))
            },
            {
                id: 345,
                budgetPlanID: 345,
                item: 'Grocery',
                amount: '25.00',
                category: 'Food',
                createdAt: new Date(Date.UTC(96, 1, 2, 3, 4, 5))
            },
            {
                id: 345,
                budgetPlanID: 345,
                item: 'Car',
                amount: '29.00',
                category: 'Auto',
                createdAt: new Date(Date.UTC(96, 1, 2, 3, 4, 5))
            }
        ]);
    });
});