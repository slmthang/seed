import { SelectbudgetPlanExpense } from '@/app/lib/definitions/db/DataBaseDefinitions';
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
        <div className="w-full border-[1px] border-light-border rounded-xl bg-white">
            <div className="w-full h-[12rem] my-[2rem]">
                <VictoryPie
                    style={{
                        data: {
                            fill: ({ datum }) => datum.fill
                        },
                        labels: {
                            fontSize: 20,
                            fill: '#434343',
                            padding: 20
                        }
                    }}
                    data={toPieChartData(categorizedExpenseListData)}
                />
            </div>
        </div>
    );
}
