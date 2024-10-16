
import { createBudgetPlan, createBudgetPlanExpense, updateBudgetPlanBalance } from "@/app/lib/db/drizzle";
import { updateBudgetPlanExpense } from "@/app/lib/db/drizzle";

export default async function Page() {

  // const status = await createBudgetPlan({userId: 'user_2nAkg093vE6oXvEDx2hVCJfoDiz', budgetPlanName: 'testName', budget: 'test', expense: 'test', balance: 'test'})
  // const expenses = await getBudgetExpensesByBudgetPlanId(43454);
  const id = await updateBudgetPlanBalance(1 ,'500.00', '200.00', "add");
  // console.log('created: ', status)

  console.log(id)

  return (
    <div className='w-screen h-[40rem] rounded-xl bg-dark'>
      {/* <h1>{user.firstName + ' ' + user.lastName}</h1>
       */}
       <h1>update budget plan</h1>
    </div>
    
  );
}