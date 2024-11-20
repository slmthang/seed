// import {
//     budgetPlanExpenseListType, subscriptionsExpenseListType,
//     trackerItemsListType, savingsExpenseListType
// } from "./definitions"

import {
    categoriedExpenseType,
    colorPalette,
    expenseDataType,
    orderByType,
    pieDataType,
    sortByType
} from './definitions';

export function calculateMoney(
    x: string,
    y: string,
    method: 'add' | 'subtract'
): string {
    const xCents: number = +x.split('.')[0] * 100 + +x.split('.')[1];
    const yCents: number = +y.split('.')[0] * 100 + +y.split('.')[1];

    let newDollar: number;
    let newCents: number | string;

    if (method === 'add') {
        const totalCents: number = xCents + yCents;

        newDollar = Math.floor(totalCents / 100);
        newCents = totalCents % 100;
    } else {
        const remainingCents: number = xCents - yCents;

        newDollar = Math.floor(remainingCents / 100);
        newCents = remainingCents % 100;
    }

    if (newCents < 0) {
        newCents = -1 * newCents;
    } else if (newCents === 0) {
        newCents = newCents + '0';
    }

    return newDollar + '.' + newCents;
}

// export function calculateTotal(expenses: string[]): string {
//     return expenses.reduce((accumulator, e) => calculateMoney(accumulator, e.amount, 'add'), '0.00')
// }

export function calculateTotalGeneric(expenses: string[]): string {
    return expenses.reduce(
        (accumulator, e) => calculateMoney(accumulator, e, 'add'),
        '0.00'
    );
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
    expenseListData: expenseDataType[],
    sortBy: sortByType,
    orderBy: orderByType
) {
    function sortByAmountAsc(A: expenseDataType, B: expenseDataType) {
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

    function sortByAmountDesc(A: expenseDataType, B: expenseDataType) {
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

    function sortByNameAsc(A: expenseDataType, B: expenseDataType) {
        const itemA = A.item.toLowerCase();
        const itemB = B.item.toLowerCase();

        if (itemA < itemB) {
            return -1;
        } else if (itemA > itemB) {
            return 1;
        }

        return 0;
    }

    function sortByNameDesc(A: expenseDataType, B: expenseDataType) {
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
    categorizedExpenseList: categoriedExpenseType[],
    sortBy: sortByType,
    orderBy: orderByType
) {
    function sortByAmountAsc(
        A: categoriedExpenseType,
        B: categoriedExpenseType
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
        A: categoriedExpenseType,
        B: categoriedExpenseType
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

    function sortByNameAsc(A: categoriedExpenseType, B: categoriedExpenseType) {
        const itemA = A.category.toLowerCase();
        const itemB = B.category.toLowerCase();

        if (itemA < itemB) {
            return -1;
        } else if (itemA > itemB) {
            return 1;
        }

        return 0;
    }

    function sortByNameDesc(
        A: categoriedExpenseType,
        B: categoriedExpenseType
    ) {
        const itemA = A.category.toLowerCase();
        const itemB = B.category.toLowerCase();

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
    expenseListData: expenseDataType[]
): pieDataType[] {
    return categorizeExpenseList(expenseListData).map((element, index) => {
        return {
            label: element.category,
            y: +element.amount,
            fill: colorPalette[index]
        };
    });
}

export function categorizeExpenseList(
    expenseListData: expenseDataType[]
): categoriedExpenseType[] {
    const categorizedExpenseList: { [key: string]: number } = {};

    expenseListData.forEach((element) => {
        if (categorizedExpenseList[element.category]) {
            categorizedExpenseList[element.category] += Number(element.amount);
        } else {
            categorizedExpenseList[element.category] = Number(element.amount);
        }
    });

    return Object.entries(categorizedExpenseList).map((element) => {
        return {
            category: element[0],
            amount: String(element[1])
        };
    });
}
