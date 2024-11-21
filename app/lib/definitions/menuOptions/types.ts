/****************************** Option ******************************/

export type sortByType = 'name' | 'amount';
export type orderByType = 'asc' | 'desc';
export type groupByType = 'item' | 'category';

export interface sortOptionsType {
    groupBy?: groupByType;
    sortBy: sortByType;
    orderBy: orderByType;
}
