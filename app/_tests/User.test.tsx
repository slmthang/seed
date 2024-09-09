

// data
import { budgetPlanIncomeData, budgetPlanExpenseListData, subscriptionsExpenseListData, trackerIncomeListData, trackerExpenseListData, savingsExpenseListData } from '../lib/placeholder-data';


import { expect, test, describe } from 'vitest';

import User from "../lib/User";
import { budgetPlanData } from "../lib/placeholder-data";

describe('testing User class', () => {

    const user = new User(
        budgetPlanIncomeData,
        budgetPlanExpenseListData,
        subscriptionsExpenseListData,
        trackerIncomeListData,
        trackerExpenseListData,
        savingsExpenseListData
    )
  
    describe('testing budgetPlan section', () => {

        test('testing budgetPlanIncome getter', () => {
            expect(user.budgetPlanIncome).toEqual(budgetPlanIncomeData)
        })

        test('testing budgetPlanIncome setter', () => {

            user.budgetPlanIncome = String(+user.budgetPlanIncome + 2000);

            expect(user.budgetPlanIncome).toEqual('4000')
        })

        test('testing budgetPlanExpenseList getter', () => {
            expect(user.budgetPlanExpenseList[0]).toEqual(budgetPlanExpenseListData[0])
        })

        test('testing budgetPlanExpenseList setter', () => {
            
            user.budgetPlanExpenseList[0] = {
                ...user.budgetPlanExpenseList[0],
                name: 'LFC'
            }

            expect(user.budgetPlanExpenseList[0].name).toEqual('LFC')
        })
    })

    describe('testing subscriptions section', () => {
        test('testing subscriptionsExpenseList getter', () => {
            expect(user.subscriptionsExpenseList[0]).toEqual(subscriptionsExpenseListData[0])
        })

        test('testing subscriptionsExpenseList setter', () => {
            
            user.subscriptionsExpenseList[0] = {
                ...user.subscriptionsExpenseList[0],
                name: 'LFC'
            }

            expect(user.subscriptionsExpenseList[0].name).toEqual('LFC')
        })
    })

    describe('testing tracker section', () => {
        test('testing trackerIncomeList getter', () => {
            expect(user.trackerIncomeList[0]).toEqual(trackerIncomeListData[0])
        })

        test('testing trackerIncomeList setter', () => {

            user.trackerIncomeList[0] = {
                ...user.trackerIncomeList[0],
                type: 'DoorDash'
            };

            expect(user.trackerIncomeList[0].type).toEqual('DoorDash')
        })

        test('testing trackerExpenseList getter', () => {
            expect(user.trackerExpenseList[0]).toEqual(trackerExpenseListData[0])
        })

        test('testing trackerExpenseList setter', () => {
            
            user.trackerExpenseList[0] = {
                ...user.trackerExpenseList[0],
                name: 'LFC'
            }

            expect(user.trackerExpenseList[0].name).toEqual('LFC')
        })
    })

    describe('testing savings section', () => {
        test('testing savingsExpenseList getter', () => {
            expect(user.savingsExpenseList[0]).toEqual(savingsExpenseListData[0])
        })

        test('testing savingsExpenseList setter', () => {
            
            user.savingsExpenseList[0] = {
                ...user.savingsExpenseList[0],
                goal: 'LFC'
            }

            expect(user.savingsExpenseList[0].goal).toEqual('LFC')
        })
    })

    describe('testing static methods', () => {
        test('testing getTotalExpense method', () => {
            expect(User.getTotalExpense(subscriptionsExpenseListData)).toEqual('115.00')
        })

        test('testing getTotalIncome method', () => {
            console.log(trackerIncomeListData)
            expect(User.getTotalIncome(trackerIncomeListData)).toEqual('3400.00')
        })
    })
})