export class QuestionBase<T> {
    name: string;
    required: boolean;
    id: number;
    symbol:string;
    symbol1:string;
    weight:number;
    weight1:number
  //  options: {key: string, value: string}[];
  
    constructor(options: {
        name?: string;
        required?: boolean;
        id?: number;
        symbol?:string;
        symbol1?:string;
        weight?:number;
        weight1?:number;
        options?: {key: string, value: string}[];
      } = {}) {
      this.name = options.name || '';
      this.symbol = options.symbol || '';
      this.symbol1 = options.symbol1 || '';
      this.weight = options.weight || 0;
      this.weight1 = options.weight1 || 0;
      this.required = !!options.required;
      this.id = options.id === undefined ? 1 : options.id;
    
    }
  }
  
  
 