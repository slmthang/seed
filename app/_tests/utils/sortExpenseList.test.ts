import { SelectbudgetPlanExpense } from '../../lib/definitions/db/DataBaseDefinitions';
import { sortBudgetPlanExpenseList } from '../../lib/utils';

const expenseListData: SelectbudgetPlanExpense[] = [
    {
        id: 345,
        budgetPlanId: 345,
        item: 'Car',
        amount: '29.00',
        category: 'Auto',
        createdAt: String(new Date(Date.UTC(96, 1, 2, 3, 4, 5)))
    },
    {
        id: 345,
        budgetPlanId: 345,
        item: 'Grocery',
        amount: '25.00',
        category: 'Food',
        createdAt: String(new Date(Date.UTC(96, 1, 2, 3, 4, 5)))
    },
    {
        id: 345,
        budgetPlanId: 345,
        item: 'Netflix',
        amount: '20.00',
        category: 'TV',
        createdAt: String(new Date(Date.UTC(96, 1, 2, 3, 4, 5)))
    }
];

describe('testing sortExpenseList', () => {
    test('Amount: should be in ascending order', () => {
        expect(
            sortBudgetPlanExpenseList(expenseListData, 'amount', 'asc')
        ).toStrictEqual([
            {
                id: 345,
                budgetPlanId: 345,
                item: 'Netflix',
                amount: '20.00',
                category: 'TV',
                createdAt: String(new Date(Date.UTC(96, 1, 2, 3, 4, 5)))
            },
            {
                id: 345,
                budgetPlanId: 345,
                item: 'Grocery',
                amount: '25.00',
                category: 'Food',
                createdAt: String(new Date(Date.UTC(96, 1, 2, 3, 4, 5)))
            },
            {
                id: 345,
                budgetPlanId: 345,
                item: 'Car',
                amount: '29.00',
                category: 'Auto',
                createdAt: String(new Date(Date.UTC(96, 1, 2, 3, 4, 5)))
            }
        ]);
    });

    test('Amount: should be in descending order', () => {
        expect(
            sortBudgetPlanExpenseList(expenseListData, 'amount', 'desc')
        ).toStrictEqual([
            {
                id: 345,
                budgetPlanId: 345,
                item: 'Car',
                amount: '29.00',
                category: 'Auto',
                createdAt: String(new Date(Date.UTC(96, 1, 2, 3, 4, 5)))
            },
            {
                id: 345,
                budgetPlanId: 345,
                item: 'Grocery',
                amount: '25.00',
                category: 'Food',
                createdAt: String(new Date(Date.UTC(96, 1, 2, 3, 4, 5)))
            },
            {
                id: 345,
                budgetPlanId: 345,
                item: 'Netflix',
                amount: '20.00',
                category: 'TV',
                createdAt: String(new Date(Date.UTC(96, 1, 2, 3, 4, 5)))
            }
        ]);
    });

    test('Name: should be in ascending order', () => {
        expect(
            sortBudgetPlanExpenseList(expenseListData, 'name', 'asc')
        ).toStrictEqual([
            {
                id: 345,
                budgetPlanId: 345,
                item: 'Car',
                amount: '29.00',
                category: 'Auto',
                createdAt: String(new Date(Date.UTC(96, 1, 2, 3, 4, 5)))
            },
            {
                id: 345,
                budgetPlanId: 345,
                item: 'Grocery',
                amount: '25.00',
                category: 'Food',
                createdAt: String(new Date(Date.UTC(96, 1, 2, 3, 4, 5)))
            },
            {
                id: 345,
                budgetPlanId: 345,
                item: 'Netflix',
                amount: '20.00',
                category: 'TV',
                createdAt: String(new Date(Date.UTC(96, 1, 2, 3, 4, 5)))
            }
        ]);
    });

    test('Name: should be in descending order', () => {
        expect(
            sortBudgetPlanExpenseList(expenseListData, 'name', 'desc')
        ).toStrictEqual([
            {
                id: 345,
                budgetPlanId: 345,
                item: 'Netflix',
                amount: '20.00',
                category: 'TV',
                createdAt: String(new Date(Date.UTC(96, 1, 2, 3, 4, 5)))
            },
            {
                id: 345,
                budgetPlanId: 345,
                item: 'Grocery',
                amount: '25.00',
                category: 'Food',
                createdAt: String(new Date(Date.UTC(96, 1, 2, 3, 4, 5)))
            },
            {
                id: 345,
                budgetPlanId: 345,
                item: 'Car',
                amount: '29.00',
                category: 'Auto',
                createdAt: String(new Date(Date.UTC(96, 1, 2, 3, 4, 5)))
            }
        ]);
    });
});
