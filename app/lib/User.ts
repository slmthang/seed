

import { budgetPlanIncomeType, budgetPlanExpenseListType, subscriptionsExpenseListType, trackerIncomeListType, trackerExpenseListType, savingsExpenseListType } from "../ui/components/definitions"

import { calculateTotal } from "./utils";

export default class User {
    
    _budgetPlanIncome: budgetPlanIncomeType;
    _budgetPlanExpenseList: budgetPlanExpenseListType ;
    _subscriptionsExpenseList: subscriptionsExpenseListType ;
    _trackerIncomeList: trackerIncomeListType ;
    _trackerExpenseList: trackerExpenseListType ;
    _savingsExpenseList: savingsExpenseListType;

    /*** DATA ***/
    constructor(
        budgetPlanIncome: budgetPlanIncomeType,
        budgetPlanExpenseList: budgetPlanExpenseListType,
        subscriptionsExpenseList: subscriptionsExpenseListType,
        trackerIncomeList: trackerIncomeListType,
        trackerExpenseList: trackerExpenseListType,
        savingsExpenseList: savingsExpenseListType
    ) {
        this._budgetPlanIncome = budgetPlanIncome;
        this._budgetPlanExpenseList = budgetPlanExpenseList;
        this._subscriptionsExpenseList = subscriptionsExpenseList;
        this._trackerIncomeList = trackerIncomeList;
        this._trackerExpenseList = trackerExpenseList;
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
    get trackerIncomeList(): trackerIncomeListType {
        return this._trackerIncomeList;
    }

    set trackerIncomeList(incomeList: trackerIncomeListType) {
        this._trackerIncomeList = incomeList;
    }

    get trackerExpenseList(): trackerExpenseListType {
        return this._trackerExpenseList;
    }

    set trackerExpenseList(expenseList: trackerExpenseListType) {
        this._trackerExpenseList = expenseList;
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
        expenses : budgetPlanExpenseListType | subscriptionsExpenseListType | trackerExpenseListType | savingsExpenseListType
    ) : string {


        return calculateTotal(expenses);
    }

    static getTotalIncome(
        expenses: trackerIncomeListType
    ) : string {

        return calculateTotal(expenses);
    }
}