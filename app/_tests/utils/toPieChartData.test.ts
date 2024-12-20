import { toPieChartData } from '../../lib/utils';
import { PieChartDataType } from '@/app/lib/definitions/charts/PieChartDefintions';
import { categorizedExpense } from '@/app/lib/definitions/categories/CategoriesDefinitions';

const categorizedBudgetExpenseListData: categorizedExpense[] = [
    {
        amount: '29.00',
        name: 'Housing'
    },
    {
        amount: '25.00',
        name: 'Food'
    },
    {
        amount: '20.00',
        name: 'Debt'
    }
];

const pieChartData: PieChartDataType[] = [
    {
        y: +'29.00',
        label: 'Housing',
        fill: '#003f5c'
    },
    {
        y: +'25.00',
        label: 'Food',
        fill: '#665191'
    },
    {
        y: +'20.00',
        label: 'Debt',
        fill: '#ff7c43'
    }
];

describe('categorizeBudgetExpenseList', () => {
    test('test 1', () => {
        expect(toPieChartData(categorizedBudgetExpenseListData)).toStrictEqual(
            pieChartData
        );
    });
});
