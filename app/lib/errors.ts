
type ErrorName = 
    'DATABASE_ERROR' |
    'AUTH_ERROR'

export class CustomError extends Error {
    name: ErrorName;
    message: string;
    cause: any;

    constructor({
        name,
        message,
        cause
    } : {
        name: ErrorName;
        message: string;
        cause? : any;
    }) {
        super();
        this.name = name;
        this.message = message;
        this.cause = cause;
    }
}