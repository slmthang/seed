import { SelectbudgetPlanExpense } from '@/app/lib/definitions/db/types';
import { categorizeBudgetExpenseList, toPieChartData } from '@/app/lib/utils';
import { VictoryPie } from 'victory';

export default function BudgetPlanChart({
    expenseListData
}: {
    expenseListData: SelectbudgetPlanExpense[];
}) {
    const categorizedExpenseListData =
        categorizeBudgetExpenseList(expenseListData);

    return (
        <div className="w-full bg-dark-surface-0 border-[1px] border-dark-border rounded-xl">
            <div className="w-full h-[12rem] my-[2rem]">
                <VictoryPie
                    style={{
                        data: {
                            fill: ({ datum }) => datum.fill
                        },
                        labels: {
                            fontSize: 20,
                            fill: '#dadada',
                            padding: 20
                        }
                    }}
                    data={toPieChartData(categorizedExpenseListData)}
                />
            </div>
        </div>
    );
}
