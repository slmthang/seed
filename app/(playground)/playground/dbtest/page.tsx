

import {getBudgetExpensesByBudgetPlanId, getBudgetPlansByUserId, getUserById} from './db'

export default async function Page() {
  
  let user = await getUserById(36);

  let budgetPlans = await getBudgetPlansByUserId(36);

  let budgetExpenses1 = await getBudgetExpensesByBudgetPlanId(budgetPlans[0].id);

  console.log(budgetPlans[0].id)
  console.log(budgetExpenses1)

  return (
    <div className='w-screen h-[40rem] rounded-xl bg-dark'>
      <h1>Name: {user[0].firstName + ' ' + user[0].lastName}</h1>
      <h2>ID: {user[0].id}</h2>
      <h2>Email: {user[0].email}</h2>
      <h2>Joined: {String(user[0].joined)}</h2>
    </div>
    
  );
}