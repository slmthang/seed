


// data 
export const data3 = [
    ['Income', '2000'],
    ['Expense', '2000'],
    ['Balance', '2000']
]

export const durations = ['day', 'week', 'month', 'year'];


// types
export type PageTypes = 'budget-plan' | 'subscriptions' | 'tracker' | 'savings';

export type AppLayoutDataType = {
    pageType : PageTypes;
    income?: string;
    budget?: string;
    expense?: string;
    balance?: string;
}


export type LargeWidgetTypes = 'tracker-home' | 'budgetPlanner-home';
export type SmallWidgetTypes = 'savings-home' | 'subscriptions-home';

export type LargeWidgetDataType = {
    widgetType : LargeWidgetTypes;
    budget? : string,
    income? : string;
    expense : string;
    balance : string;
}

export type SmallWidgetDataType = {
    widgetType : SmallWidgetTypes;
    expense : string;
}

export type overViewDataType = {
    budget? : {name: string, amount: string}, 
    income?: {name: string, amount: string}, 
    expense: {name: string, amount: string}, 
    balance: {name: string, amount: string}
}

export type budgetPlanData = {
    income: budgetPlanIncomeType;
    expenseList: budgetPlanExpenseListType
}

export type budgetPlanIncomeType = string;

export type budgetPlanExpenseListType = {
    name: string, 
    amount: string, 
    category: string
}[];

export type subscriptionsExpenseListType = {
    name: string, 
    amount: string, 
    category: string,
    paymentDay: string
}[];

export type trackerItemsListType = {
    name: string, 
    amount: string,
    isExpense: Boolean,
    category: string,
    date: string
}[]

export type savingsExpenseListType = {
    name: string, 
    amount: string,
    category: string,
    date: string
}[];


export type AppDataType = {
    userId: number,
    budgetPlan: {
        budget: string,
        expense: string,
        balance: string,
        expenseList: budgetPlanExpenseListType
    },
    subscriptions: {
        expense: string,
        expenseList: subscriptionsExpenseListType
    },
    tracker: {
        income: string,
        expense: string,
        balance: string,
        expenseList: trackerItemsListType,
        incomeList: trackerItemsListType,
        itemsList: trackerItemsListType
    },
    savings: {
        expense: string,
        expenseList: savingsExpenseListType
    },
}