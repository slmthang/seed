// import {
//     budgetPlanExpenseListType, subscriptionsExpenseListType,
//     trackerItemsListType, savingsExpenseListType
// } from "./definitions"

import { orderBy, sortBy } from './definitions/Options';

import { categories, categoryList } from './definitions/Categories';

import { categorizedExpense } from './definitions/Categories';

import { PieChartDataType } from './definitions/PieChart';

import { SelectbudgetPlanExpense } from './definitions/DataBase';

// ***************************************** Tested ***************************************** //
/**
 * sort a budget plan expense list according to sortBy {name and amount} and orderBy (asc and desc)
 * @param budgetPlanExpenseListData : SelectbudgetPlanExpense[]
 * @param sortBy : sortBy
 * @param orderBy : orderBy
 * @returns a sorted budgetPlanExpenseListData
 */
export function sortBudgetPlanExpenseList(
    budgetPlanExpenseListData: SelectbudgetPlanExpense[],
    sortBy: sortBy,
    orderBy: orderBy
): SelectbudgetPlanExpense[] {
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
        return budgetPlanExpenseListData.sort(sortByAmountAsc);
    } else if (sortBy === 'amount' && orderBy === 'desc') {
        return budgetPlanExpenseListData.sort(sortByAmountDesc);
    }

    if (sortBy === 'name' && orderBy === 'asc') {
        return budgetPlanExpenseListData.sort(sortByNameAsc);
    } else {
        return budgetPlanExpenseListData.sort(sortByNameDesc);
    }
}

/**
 * validate money inputs 9 should output in 9.00
 * add decimals if abscent
 * remove decimals after hundredth
 * @param x {string}
 * @returns in validated money format {string}
 */
export function validateMoneyInput(x: string): string {
    const [xDollars, xCents] = splitMoney(x);

    if (!xCents) {
        return xDollars + '.00';
    } else {
        if (xCents.length === 1) {
            return xDollars + '.' + xCents + '0';
        } else if (xCents.length === 2) {
            return xDollars + '.' + xCents;
        } else {
            return xDollars + '.' + xCents.slice(0, 2);
        }
    }
}

/**
 * split money into array[dollars, cents]
 * @param x : string
 * @returns returns a string array with [dollars, cents]
 */
export function splitMoney(x: string): string[] {
    const [dollars, cents] = x.split('.');

    return [dollars, cents];
}

/**
 * Capitalize Strings
 * @example
 * // returns 'Solomon'
 * capitalize('solomon')
 * @example
 * // returns 'Solomon Thang'
 * capitalize('solomon thang')
 * @param str <string>
 * @returns <string>
 */
export function capitalizeString(str: string): string {
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

/**
 * add or subtract money accurately
 * @param x string
 * @param y string
 * @param method 'add' | 'subtract'
 * @returns result
 */
export function calculateMoney(
    x: string,
    y: string,
    method: 'add' | 'subtract'
): string {
    const [xDollars, xCents] = splitMoney(x);
    const [yDollars, yCents] = splitMoney(y);

    if (method === 'add') {
        const xTotalCents = +xDollars * 100 + +xCents;
        const yTotalCents = +yDollars * 100 + +yCents;
        const totalCents = xTotalCents + yTotalCents;

        const actualDollars = totalCents / 100;
        const actualCents = totalCents % 100;

        const validatedResult = validateMoneyInput(
            actualDollars + '.' + actualCents
        );

        return validatedResult;
    } else {
        const xTotalCents = +xDollars * 100 + +xCents;
        const yTotalCents = +yDollars * 100 + +yCents;
        const remainderCents = xTotalCents - yTotalCents;

        const actualDollars = remainderCents / 100;
        const actualCents = remainderCents % 100;

        const validatedResult = validateMoneyInput(
            actualDollars + '.' + actualCents
        );

        return validatedResult;
    }
}

/**
 * sort categorizedExpenseList by sort and order conditions
 * @param categorizedExpenseList
 * @param sortBy
 * @param orderBy
 * @returns
 */
export function sortCategorizedExpenseList(
    categorizedExpenseList: categorizedExpense[],
    sortBy: sortBy,
    orderBy: orderBy
) {
    function sortByAmountAsc(A: categorizedExpense, B: categorizedExpense) {
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

    function sortByAmountDesc(A: categorizedExpense, B: categorizedExpense) {
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

    function sortByNameAsc(A: categorizedExpense, B: categorizedExpense) {
        const itemA = A.name.toLowerCase();
        const itemB = B.name.toLowerCase();

        if (itemA < itemB) {
            return -1;
        } else if (itemA > itemB) {
            return 1;
        }

        return 0;
    }

    function sortByNameDesc(A: categorizedExpense, B: categorizedExpense) {
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
 * convert budget expense list to categorized budget expense list
 * @param expenseListData
 * @returns
 */
export function categorizeBudgetExpenseList(
    budgetExpenseListData: SelectbudgetPlanExpense[]
): categorizedExpense[] {
    const bufferObj: { [key: string]: number } = {};

    budgetExpenseListData.forEach((element) => {
        if (element.category in bufferObj) {
            bufferObj[element.category] += +element.amount;
        } else {
            bufferObj[element.category] = +element.amount;
        }
    });

    return Object.entries(bufferObj).map((element) => {
        return {
            name: element[0],
            amount: validateMoneyInput(String(element[1]))
        };
    });
}

/**
 * Convert from categorized expense to pie chart data
 * @param categorizedExpenseList
 * @returns
 */
export function toPieChartData(
    categorizedExpenseList: categorizedExpense[]
): PieChartDataType[] {
    return categorizedExpenseList.map((element) => {
        return {
            label: element.name,
            y: +element.amount,
            fill: categoryList[element.name as categories]
        };
    });
}

/**
 * check if a number is negative
 * @param x : number
 * @returns
 */
export function isNegative(x: number): boolean {
    if (x < 0) {
        return true;
    }

    return false;
}

/**
 * convert number to absolute number
 * @param x : number
 * @returns
 */
export function absoluteNumber(x: number): number {
    if (x < 0) {
        return -x;
    }

    return x;
}

// ***************************************** UnTested ***************************************** //
