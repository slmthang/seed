
import { createBudgetPlan, createBudgetPlanExpense } from "@/app/db/db";
import { updateBudgetPlanExpense } from "@/app/db/db";

export default async function Page() {

  // const status = await createBudgetPlan({userId: 'user_2nAkg093vE6oXvEDx2hVCJfoDiz', budgetPlanName: 'testName', budget: 'test', expense: 'test', balance: 'test'})
  // const expenses = await getBudgetExpensesByBudgetPlanId(43454);
  const id = await updateBudgetPlanExpense(,'1000.00', '500.00')
  // console.log('created: ', status)

  console.log(id)

  return (
    <div className='w-screen h-[40rem] rounded-xl bg-dark'>
      {/* <h1>{user.firstName + ' ' + user.lastName}</h1>
       */}
       <h1>adding budget plan</h1>
    </div>
    
  );
}