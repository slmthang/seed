import { categorizeBudgetExpenseList } from '../../lib/utils';
import { SelectbudgetPlanExpense } from '@/app/lib/definitions/db/types';
import { categorizedExpense } from '@/app/lib/definitions/types';

const budgetPlanExpenseListData: SelectbudgetPlanExpense[] = [
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
        item: 'Car',
        amount: '1.00',
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

const categorizedBudgetExpenseListData: categorizedExpense[] = [
    {
        amount: '30.00',
        name: 'Auto'
    },
    {
        amount: '25.00',
        name: 'Food'
    },
    {
        amount: '20.00',
        name: 'TV'
    }
];

describe('categorizeBudgetExpenseList', () => {
    test('test 1', () => {
        expect(
            categorizeBudgetExpenseList(budgetPlanExpenseListData)
        ).toStrictEqual(categorizedBudgetExpenseListData);
    });
});
