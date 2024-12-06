import { SelectbudgetPlanExpense } from '@/app/lib/definitions/db/types';
import { categorizeBudgetExpenseList, toPieChartData } from '@/app/lib/utils';
import { VictoryPie } from 'victory';

export default function BudgetPlanChart({
    expenseListData
}: {
    expenseListData: SelectbudgetPlanExpense[];
}) {
    // const [chartActive, setChartActive] = useState<boolean>(true);

    const categorizedExpenseListData =
        categorizeBudgetExpenseList(expenseListData);

    return (
        <div className="w-full border-[1px] border-dark-border rounded-xl">
            {/* <div className={clsx("w-full px-4 py-2 h-[3rem]  flex items-center justify-between", {'rounded-xl': !chartActive}, {'rounded-t-xl border-b-[1px] border-dark-border': chartActive})} onClick={() => setChartActive(prev => !prev)}>
                <p className="text-lg font-bold">Chart</p>
                {
                    chartActive? 
                    <ChevronDownIcon /> :
                    <ChevronRightIcon />
                }
            </div> */}

            <div className="w-full h-[12rem] my-[2rem]">
                <VictoryPie
                    style={{
                        data: {
                            fill: ({ datum }) => datum.fill
                        },
                        labels: {
                            fontSize: 22,
                            fill: '#dadada'
                        }
                    }}
                    data={toPieChartData(categorizedExpenseListData)}
                />
            </div>
        </div>
    );
}
