// import {
//     budgetPlanExpenseListType, subscriptionsExpenseListType,
//     trackerItemsListType, savingsExpenseListType
// } from "./definitions"

import { sortByType, orderByType } from './definitions/menuOptions/types';

import { categorizedExpenseType, colorPalette, pieDataType } from './definitions/types';

import { SelectbudgetPlanExpense } from './definitions/db/types';

export function calculateMoney(
    x: number,
    y: number,
    method: 'add' | 'subtract'
): number {
    if (method === 'add') {
        return Number((x + y).toFixed(2));
    } else {
        return Number((x - y).toFixed(2));
    }
}

export function validateMoneyInput(x: string): string {
    if (x.split('.').length <= 1) {
        return x + '.00';
    }

    return x;
}

export function splitMoney(x: string): string[] {
    const [dollars, cents] = x.split('.');

    return [dollars, cents];
}

export function formatDate(date: Date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

export function sortExpenseList(
    expenseListData: SelectbudgetPlanExpense[],
    sortBy: sortByType,
    orderBy: orderByType
) {
    function sortByAmountAsc(
        A: SelectbudgetPlanExpense,
        B: SelectbudgetPlanExpense
    ) {
        const [dollarsA, centsA] = splitMoney(String(A.amount));
        const [dollarsB, centsB] = splitMoney(String(B.amount));

        if (+dollarsA < +dollarsB) {
            return -1;
        } else if (+dollarsA > +dollarsB) {
            return 1;
        }

        if (+centsA < +centsB) {
            return -1;
        } else if (+centsA > +centsB) {
            return 1;
        }

        return 0;
    }

    function sortByAmountDesc(
        A: SelectbudgetPlanExpense,
        B: SelectbudgetPlanExpense
    ) {
        const [dollarsA, centsA] = splitMoney(String(A.amount));
        const [dollarsB, centsB] = splitMoney(String(B.amount));

        if (+dollarsA > +dollarsB) {
            return -1;
        } else if (+dollarsA < +dollarsB) {
            return 1;
        }

        if (+centsA > +centsB) {
            return -1;
        } else if (+centsA < +centsB) {
            return 1;
        }

        return 0;
    }

    function sortByNameAsc(
        A: SelectbudgetPlanExpense,
        B: SelectbudgetPlanExpense
    ) {
        const itemA = A.item.toLowerCase();
        const itemB = B.item.toLowerCase();

        if (itemA < itemB) {
            return -1;
        } else if (itemA > itemB) {
            return 1;
        }

        return 0;
    }

    function sortByNameDesc(
        A: SelectbudgetPlanExpense,
        B: SelectbudgetPlanExpense
    ) {
        const itemA = A.item.toLowerCase();
        const itemB = B.item.toLowerCase();

        if (itemA > itemB) {
            return -1;
        } else if (itemA < itemB) {
            return 1;
        }

        return 0;
    }

    if (sortBy === 'amount' && orderBy === 'asc') {
        return expenseListData.sort(sortByAmountAsc);
    } else if (sortBy === 'amount' && orderBy === 'desc') {
        return expenseListData.sort(sortByAmountDesc);
    }

    if (sortBy === 'name' && orderBy === 'asc') {
        return expenseListData.sort(sortByNameAsc);
    } else {
        return expenseListData.sort(sortByNameDesc);
    }
}

export function sortCategorizedList(
    categorizedExpenseList: categorizedExpenseType[],
    sortBy: sortByType,
    orderBy: orderByType
) {
    function sortByAmountAsc(
        A: categorizedExpenseType,
        B: categorizedExpenseType
    ) {
        return Math.round(A.amount - B.amount);
    }

    function sortByAmountDesc(
        A: categorizedExpenseType,
        B: categorizedExpenseType
    ) {
        return Math.round(B.amount - A.amount);
    }

    function sortByNameAsc(
        A: categorizedExpenseType,
        B: categorizedExpenseType
    ) {
        const itemA = A.name.toLowerCase();
        const itemB = B.name.toLowerCase();

        if (itemA < itemB) {
            return -1;
        } else if (itemA > itemB) {
            return 1;
        }

        return 0;
    }

    function sortByNameDesc(
        A: categorizedExpenseType,
        B: categorizedExpenseType
    ) {
        const itemA = A.name.toLowerCase();
        const itemB = B.name.toLowerCase();

        if (itemA > itemB) {
            return -1;
        } else if (itemA < itemB) {
            return 1;
        }

        return 0;
    }

    if (sortBy === 'amount' && orderBy === 'asc') {
        return categorizedExpenseList.sort(sortByAmountAsc);
    } else if (sortBy === 'amount' && orderBy === 'desc') {
        return categorizedExpenseList.sort(sortByAmountDesc);
    }

    if (sortBy === 'name' && orderBy === 'asc') {
        return categorizedExpenseList.sort(sortByNameAsc);
    } else {
        return categorizedExpenseList.sort(sortByNameDesc);
    }
}

/**
 * Capitalize Words
 * @example
 * // returns 'Solomon'
 * capitalize('solomon')
 * @example
 * // returns 'Solomon Thang'
 * capitalize('solomon thang')
 * @param str <string>
 * @returns <string>
 */
export function capitalize(str: string): string {
    let splittedStr = str.split(' ');

    if (splittedStr.length < 0) {
        throw new Error('The input string must not be empty.');
    }

    if (splittedStr.length > 1) {
        splittedStr = splittedStr.map((element) => {
            return element.charAt(0).toUpperCase() + element.slice(1);
        });

        return splittedStr.join(' ');
    }

    return splittedStr[0].charAt(0).toUpperCase() + splittedStr[0].slice(1);
}

export function pieExpenseList(
    expenseListData: SelectbudgetPlanExpense[]
): pieDataType[] {
    return categorizeExpenseList(expenseListData).map((element, index) => {
        return {
            label: element.name,
            y: +element.amount,
            fill: colorPalette[index]
        };
    });
}

export function categorizeExpenseList(
    expenseListData: SelectbudgetPlanExpense[]
): categorizedExpenseType[] {
    const categorizedExpenseList: { [key: string]: number } = {};

    expenseListData.forEach((element) => {
        if (categorizedExpenseList[element.categoryId]) {
            categorizedExpenseList[element.categoryId] += Number(element.amount);
        } else {
            categorizedExpenseList[element.categoryId] = Number(element.amount);
        }
    });

    return Object.entries(categorizedExpenseList).map((element) => {
        return {
            name: element[0],
            amount: element[1]
        };
    });
}
