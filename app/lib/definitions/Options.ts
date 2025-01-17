/****************************** Option ******************************/

export type sortBy = 'name' | 'amount';
export type orderBy = 'asc' | 'desc';
export type groupBy = 'item' | 'category';

export interface budgetPlanOptions {
    groupBy?: groupBy;
    sortBy?: sortBy;
    orderBy: orderBy;
}
