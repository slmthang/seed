
/* ########################################### IMPORTS ########################################### */

import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod"; // Add new import



/* ########################################### TYPES ########################################### */

/****************************** AddExpenseForm ******************************/

// AddExpenseFormData
export type AddExpenseFormData = {
    budgetPlanId: string;
    totalExpense: string;
    totalBalance: string;
    item: string;
    amount: string;
    category: string;
}

// AddExpenseFormFieldNames
export type AddExpenseFormFieldNames = 'budgetPlanId' | 'totalExpense' | 'totalBalance' | 'item' | 'amount' | 'category';

// AddExpenseFormFieldProps
export type AddExpenseFormFieldProps = {
    label?: string;
    type: string;
    placeholder?: string;
    name: AddExpenseFormFieldNames;
    value?: string;
    register: UseFormRegister<AddExpenseFormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean
}

// AddExpenseFromSchema Zod Object
export const AddExpenseFromSchema: ZodType<AddExpenseFormData> = z
.object({
    budgetPlanId: z.string(),
    totalExpense: z.string(),
    totalBalance: z.string(),
    item: z.string()
        .min(1, { message: 'Name is required.'})
        .max(120, { message: 'Name must be not be longer than 120 characters.'}),
    amount: z.string()
        .min(1, { message: 'Amount is required.'})
        .regex(new RegExp(/[0-9]*\.[0-9]*/), 'Enter a valid amount. Examples: "100.00" for $100 and "99.99" for $99.99 '),
    category: z.string()
        .min(1, { message: 'Category is required.'}),
})



export type budgetPlanType = {
    id: number;
    userId: string;
    budgetPlanName: string;
    budget: string;
    expense: string;
    balance: string;
    createdAt: Date;
}

export type expenseListType = Array<{
    id: number;
    budgetPlanID: number;
    item: string;
    amount: string;
    category: string;
    createdAt: Date;
}>

/************************************************************************************************************************/

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
    user: {
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        joined: Date
    }
    // budgetPlan: {
    //     budget: string,
    //     expense: string,
    //     balance: string,
    //     expenseList: budgetPlanExpenseListType
    // },
    // subscriptions: {
    //     expense: string,
    //     expenseList: subscriptionsExpenseListType
    // },
    // tracker: {
    //     income: string,
    //     expense: string,
    //     balance: string,
    //     expenseList: trackerItemsListType,
    //     incomeList: trackerItemsListType,
    //     itemsList: trackerItemsListType
    // },
    // savings: {
    //     expense: string,
    //     expenseList: savingsExpenseListType
    // },
}