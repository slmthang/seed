export const categoryList: CategoryList = {
    Housing: '#ea5545',
    Transportation: '#f46a9b',
    Food: '#ef9b20',
    Utilities: '#edbf33',
    Insurance: '#ede15b',
    Personal: '#bdcf32',
    Debt: '#87bc45',
    Savings: '#27aeef',
    Others: '#b33dc6'
};

export type CategoryList = {
    [key in categories]: categoryColors;
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
export type categoryColors =
    | '#ea5545'
    | '#f46a9b'
    | '#ef9b20'
    | '#edbf33'
    | '#ede15b'
    | '#bdcf32'
    | '#87bc45'
    | '#27aeef'
    | '#b33dc6';
