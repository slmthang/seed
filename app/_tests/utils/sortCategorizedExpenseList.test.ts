import { categorizedExpense } from '@/app/lib/definitions/categories/type';
import { sortCategorizedExpenseList } from '../../lib/utils';

const categorizedExpenseListData: categorizedExpense[] = [
    {
        name: 'Auto',
        amount: '29.00'
    },
    {
        name: 'House',
        amount: '209.00'
    },
    {
        name: 'Food',
        amount: '49.00'
    }
];

describe('testing sortCategorizedList', () => {
    test('Amount: should be in ascending order', () => {
        expect(
            sortCategorizedExpenseList(
                categorizedExpenseListData,
                'amount',
                'asc'
            )
        ).toStrictEqual([
            {
                name: 'Auto',
                amount: '29.00'
            },
            {
                name: 'Food',
                amount: '49.00'
            },
            {
                name: 'House',
                amount: '209.00'
            }
        ]);
    });

    test('Amount: should be in descending order', () => {
        expect(
            sortCategorizedExpenseList(
                categorizedExpenseListData,
                'amount',
                'desc'
            )
        ).toStrictEqual([
            {
                name: 'House',
                amount: '209.00'
            },
            {
                name: 'Food',
                amount: '49.00'
            },
            {
                name: 'Auto',
                amount: '29.00'
            }
        ]);
    });

    test('Name: should be in ascending order', () => {
        expect(
            sortCategorizedExpenseList(
                categorizedExpenseListData,
                'name',
                'asc'
            )
        ).toStrictEqual([
            {
                name: 'Auto',
                amount: '29.00'
            },
            {
                name: 'Food',
                amount: '49.00'
            },
            {
                name: 'House',
                amount: '209.00'
            }
        ]);
    });

    test('Name: should be in descending order', () => {
        expect(
            sortCategorizedExpenseList(
                categorizedExpenseListData,
                'name',
                'desc'
            )
        ).toStrictEqual([
            {
                name: 'House',
                amount: '209.00'
            },
            {
                name: 'Food',
                amount: '49.00'
            },
            {
                name: 'Auto',
                amount: '29.00'
            }
        ]);
    });
});
