export const categoryList: CategoryList = {
    Housing: '#003f5c',
    Transportation: '#2f4b7c',
    Food: '#665191',
    Utilities: '#f95d6a',
    Insurance: '#a05195',
    Personal: '#d45087',
    Debt: '#ff7c43',
    Savings: '#ffa600',
    Others: '#b33dc6'
};

export type CategoryList = {
    [key in categories]: string;
};

export type categories =
    | 'Housing'
    | 'Transportation'
    | 'Food'
    | 'Utilities'
    | 'Insurance'
    | 'Personal'
    | 'Debt'
    | 'Savings'
    | 'Others';
// export type categoryColors =
//     | '#ea5545'
//     | '#f46a9b'
//     | '#ef9b20'
//     | '#edbf33'
//     | '#ede15b'
//     | '#bdcf32'
//     | '#87bc45'
//     | '#27aeef'
//     | '#b33dc6';
