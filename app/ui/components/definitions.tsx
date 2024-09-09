


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
    expense?: string;
    balance?: string;
}


export type LargeWidgetTypes = 'tracker-home' | 'budgetPlanner-home';
export type SmallWidgetTypes = 'savings-home' | 'subscriptions-home';

export type LargeWidgetData = {
    widgetType : LargeWidgetTypes;
    income : string;
    expense : string;
    balance : string;
}

export type SmallWidgetData = {
    widgetType : SmallWidgetTypes;
    balance : string;
}

export type overViewDataType = {
    income: {name: string, amount: string}, 
    expense: {name: string, amount: string}, 
    balance: {name: string, amount: string}
}

export type budgetPlanData = {
    income: budgetPlanIncomeType;
    expenses: budgetPlanExpenseListType
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
    isActive: Boolean,
    recurring: {
        isTrue: Boolean,
        frequency: 'daily' | 'weekly' | 'monthly' | 'yearly',
    },
    date: string
}[];

export type trackerIncomeListType = {
    type: string, 
    amount: string,
    recurring: {
        isTrue: Boolean,
        frequency: 'daily' | 'weekly' | 'monthly' | 'yearly',
    },
    date: string
}[]

export type trackerExpenseListType = {
    name: string, 
    amount: string, 
    category: string,
    date: string
}[];

export type savingsExpenseListType = {
    goal: string, 
    amount: string, 
    memo: string,
    recurring: {
        isTrue: Boolean,
        frequency: 'daily' | 'weekly' | 'monthly' | 'yearly',
    },
    date: string
}[];