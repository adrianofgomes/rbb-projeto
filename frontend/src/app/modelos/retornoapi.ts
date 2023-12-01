export class RetornoApi {
    
    message:string;
    success: boolean;
    data: any;
    constructor (message: string, success: boolean, data: any){
        this.message = message;
        this.success = success;
        this.data = data;
     }
}
  
  