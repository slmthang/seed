import { toPieChartData } from '../../lib/utils';
import { PieChartDataType } from '@/app/lib/definitions/types';
import { categorizedExpense } from '@/app/lib/definitions/types';

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
        fill: '#ea5545'
    },
    {
        y: +'25.00',
        label: 'Food',
        fill: '#ef9b20'
    },
    {
        y: +'20.00',
        label: 'Debt',
        fill: '#87bc45'
    }
];

describe('categorizeBudgetExpenseList', () => {
    test('test 1', () => {
        expect(toPieChartData(categorizedBudgetExpenseListData)).toStrictEqual(
            pieChartData
        );
    });
});
