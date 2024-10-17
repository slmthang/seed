
/* ########################################### IMPORTS ########################################### */

import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod"; // Add new import


/* ########################################### TYPES ########################################### */

/****************************** AddExpenseForm ******************************/

// AddExpenseFormData Type
export type AddExpenseFormDataType = {
    budgetPlanId: string;
    totalExpense: string;
    totalBalance: string;
    item: string;
    amount: string;
    category: string;
}

// AddExpenseFormFieldNames Type
export type AddExpenseFormFieldNamesType = 'budgetPlanId' | 'totalExpense' | 'totalBalance' | 'item' | 'amount' | 'category';

// AddExpenseFormFieldProps Type
export type AddExpenseFormFieldPropsType = {
    label?: string;
    type: string;
    placeholder?: string;
    name: AddExpenseFormFieldNamesType;
    value?: string;
    register: UseFormRegister<AddExpenseFormDataType>;
    error: FieldError | undefined;
    valueAsNumber?: boolean
}

// AddExpenseFromSchema Zod Object 
export const AddExpenseFromSchema: ZodType<AddExpenseFormDataType> = z
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



/****************************** AddBudgetPlanForm ******************************/

export type AddBudgetPlanFormDataType = {
    budgetPlanName: string;
    budgetAmount: string;
}


export type AddBudgetPlanFormFieldsTypes = 'budgetPlanName' | 'budgetAmount' ;


export type AddBudgetPlanFormFieldPropsType = {
    label?: string;
    type: string;
    placeholder?: string;
    name: AddBudgetPlanFormFieldsTypes;
    actualValue?: string;
    register: UseFormRegister<AddBudgetPlanFormDataType>;
    error: FieldError | undefined;
    valueAsNumber?: boolean
}


export const AddBudgetPlanFormSchema: ZodType<AddBudgetPlanFormDataType> = z
.object({
    budgetPlanName: z.string()
        .min(1, { message: 'Name is required.'})
        .max(120, { message: 'Name must be not be longer than 120 characters.'}),
    budgetAmount: z.string()
        .min(1, { message: 'Amount is required.'})
        .regex(new RegExp(/[0-9]*\.[0-9]*/), 'Enter a valid amount. Examples: "100.00" for $100 and "99.99" for $99.99 ')
})






/****************************** Database Type ******************************/

// budgetPlan Type
export type budgetPlanType = {
    id: number;
    userId: string;
    budgetPlanName: string;
    totalBudget: string;
    totalExpense: string;
    totalBalance: string;
    createdAt: Date;
}

// export type budgetPlanListType = {
//     id: number;
//     userId: string;
//     budgetPlanName: string;
//     totalBudget: string;
//     totalExpense: string;
//     totalBalance: string;
//     createdAt: Date;
// }[] 

// expenseList Type
export type expenseListType = Array<{
    id: number;
    budgetPlanID: number;
    item: string;
    amount: string;
    category: string;
    createdAt: Date;
}>

/************************************************************************************************************************/


// export const durations = ['day', 'week', 'month', 'year'];


// // types
// export type PageTypes = 'budget-plan' | 'subscriptions' | 'tracker' | 'savings';

// export type AppLayoutDataType = {
//     pageType : PageTypes;
//     income?: string;
//     budget?: string;
//     expense?: string;
//     balance?: string;
// }


// export type LargeWidgetTypes = 'tracker-home' | 'budgetPlanner-home';
// export type SmallWidgetTypes = 'savings-home' | 'subscriptions-home';

// export type LargeWidgetDataType = {
//     widgetType : LargeWidgetTypes;
//     budget? : string,
//     income? : string;
//     expense : string;
//     balance : string;
// }

// export type SmallWidgetDataType = {
//     widgetType : SmallWidgetTypes;
//     expense : string;
// }

// export type overViewDataType = {
//     budget? : {name: string, amount: string}, 
//     income?: {name: string, amount: string}, 
//     expense: {name: string, amount: string}, 
//     balance: {name: string, amount: string}
// }

// export type budgetPlanData = {
//     income: budgetPlanIncomeType;
//     expenseList: budgetPlanExpenseListType
// }

// export type budgetPlanIncomeType = string;

// export type budgetPlanExpenseListType = {
//     name: string, 
//     amount: string, 
//     category: string
// }[];

// export type subscriptionsExpenseListType = {
//     name: string, 
//     amount: string, 
//     category: string,
//     paymentDay: string
// }[];

// export type trackerItemsListType = {
//     name: string, 
//     amount: string,
//     isExpense: Boolean,
//     category: string,
//     date: string
// }[]

// export type savingsExpenseListType = {
//     name: string, 
//     amount: string,
//     category: string,
//     date: string
// }[];


// export type AppDataType = {
//     user: {
//         id: string,
//         firstName: string,
//         lastName: string,
//         email: string,
//         joined: Date
//     }
//     // budgetPlan: {
//     //     budget: string,
//     //     expense: string,
//     //     balance: string,
//     //     expenseList: budgetPlanExpenseListType
//     // },
//     // subscriptions: {
//     //     expense: string,
//     //     expenseList: subscriptionsExpenseListType
//     // },
//     // tracker: {
//     //     income: string,
//     //     expense: string,
//     //     balance: string,
//     //     expenseList: trackerItemsListType,
//     //     incomeList: trackerItemsListType,
//     //     itemsList: trackerItemsListType
//     // },
//     // savings: {
//     //     expense: string,
//     //     expenseList: savingsExpenseListType
//     // },
// }