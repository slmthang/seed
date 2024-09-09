
import { 
    budgetPlanExpenseListType, subscriptionsExpenseListType, 
    trackerIncomeListType, trackerExpenseListType, savingsExpenseListType 
} from "../ui/components/definitions"


export function calculateMoney(x: string, y: string, method: 'add' | 'subtract') : string {

    let xCents : number = (+x.split('.')[0] * 100) + +(x.split('.')[1]);
    let yCents : number = (+y.split('.')[0] * 100) + +(y.split('.')[1]);

    let newDollar: number;
    let newCents: number | string;

    if (method === 'add') {

        let totalCents : number = xCents + yCents;

        newDollar = Math.floor(totalCents/100);
        newCents = totalCents % 100;

    } else {

        let remainingCents : number = xCents - yCents;

        newDollar = Math.floor(remainingCents/100);
        newCents = remainingCents % 100;
    }

    if (newCents < 0) {
        -1 * newCents;
    } else if (newCents === 0) {
        newCents = newCents + '0';
    }

    return newDollar + '.' + newCents
}

export function calculateTotal(expenses: budgetPlanExpenseListType | subscriptionsExpenseListType | trackerExpenseListType | savingsExpenseListType | trackerIncomeListType): string {
    return expenses.reduce((accumulator, e) => calculateMoney(accumulator, e.amount, 'add'), '0.00')
}


export function validateMoneyInput(x:string) : string {

    if (x.split('.').length <= 1) {
        return x + '.00'
    }

    return x;
}