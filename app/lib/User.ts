

import { budgetPlanIncomeType, budgetPlanExpenseListType, subscriptionsExpenseListType, trackerItemsListType, savingsExpenseListType } from "../ui/components/definitions"

import { calculateTotal } from "./utils";

export default class User {
    
    _budgetPlanIncome: budgetPlanIncomeType;
    _budgetPlanExpenseList: budgetPlanExpenseListType ;
    _subscriptionsExpenseList: subscriptionsExpenseListType ;
    _trackerItemsList: trackerItemsListType ;
    _savingsExpenseList: savingsExpenseListType;

    /*** DATA ***/
    constructor(
        budgetPlanIncome: budgetPlanIncomeType,
        budgetPlanExpenseList: budgetPlanExpenseListType,
        subscriptionsExpenseList: subscriptionsExpenseListType,
        trackerItemsList: trackerItemsListType,
        savingsExpenseList: savingsExpenseListType
    ) {
        this._budgetPlanIncome = budgetPlanIncome;
        this._budgetPlanExpenseList = budgetPlanExpenseList;
        this._subscriptionsExpenseList = subscriptionsExpenseList;
        this._trackerItemsList = trackerItemsList;
        this._savingsExpenseList = savingsExpenseList;
    }

    /*** Budget Plan ***/
    get budgetPlanIncome(): budgetPlanIncomeType {
        return this._budgetPlanIncome;
    }

    set budgetPlanIncome(income: budgetPlanIncomeType) {
        this._budgetPlanIncome = income;
    }

    get budgetPlanExpenseList(): budgetPlanExpenseListType {
        return this._budgetPlanExpenseList;
    }

    set budgetPlanExpenseList(expenseList: budgetPlanExpenseListType) {
        this._budgetPlanExpenseList = expenseList;
    }

    /*** Subscriptions ***/
    get subscriptionsExpenseList(): subscriptionsExpenseListType {
        return this._subscriptionsExpenseList;
    }

    set subscriptionExpenseList(expenseList: subscriptionsExpenseListType) {
        this._subscriptionsExpenseList = expenseList;
    }

    /*** Tracker ***/
    get trackerIncomeList(): trackerItemsListType {
        return this._trackerItemsList;
    }

    set trackerIncomeList(incomeList: trackerItemsListType) {
        this._trackerItemsList = incomeList;
    }

    /*** Savings ***/
    get savingsExpenseList(): savingsExpenseListType {
        return this._savingsExpenseList;
    }

    set savingsExpenseList(expenseList: savingsExpenseListType) {
        this._savingsExpenseList = expenseList;
    }

    /*** Static Methods ***/
    static getTotalExpense(
        expenses : budgetPlanExpenseListType | subscriptionsExpenseListType | trackerItemsListType | savingsExpenseListType
    ) : string {


        return calculateTotal(expenses);
    }

    static getTotalIncome(
        expenses: trackerItemsListType
    ) : string {

        return calculateTotal(expenses);
    }
}