export default class AppError{
    public readonly mensage:string;
    public readonly statusCode:number;
    constructor (message:string, statusCode = 400){
        this.mensage = message;
        this.statusCode = statusCode;
    }
}