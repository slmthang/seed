


// data 
export const data3 = [
    ['Income', '2000'],
    ['Expense', '2000'],
    ['Balance', '2000']
]

export const durations = ['day', 'week', 'month', 'year'];


// types
export type PageTypes = 'budget-plan' | 'subscriptions' | 'tracker' | 'savings';

export type AppLayoutData = {
    pageType : PageTypes;
    // LargeWidgetData : LargeWidgetData;
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