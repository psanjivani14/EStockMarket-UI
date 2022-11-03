import { Stock } from "../stock/stock";

export class Company {

    companyCode :number | any;
    companyName: string | any;
    website : string | any;
    turnover : number | any;
    companyCeo : string | any;
    stockPrice: number | any;
    stockList: Array<Stock>=[];
}
