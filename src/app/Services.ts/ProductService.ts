import { Injectable } from "@angular/core";
import { HttpService } from "./http";


@Injectable({
  providedIn:'root'
})
export class ProductService {
private message:string|undefined;
private productId:number |undefined;
setMessage(msg:string){
  this.message=msg;
}

getMessage(){
  return this.message;
}

setproductId(p_id:number){
if(p_id >=0){
this.productId=p_id;
}

}

getproductId(){
  return this.productId;
}
  constructor(private http:HttpService){

  }


  getProducts(){
    let productList: any = [
      {productname: 'samsung',price: 20000,quantity: 1},
      { productname: 'Iphone', price: 20000, quantity: 1},
      { productname: 'Laptop', price: 20000, quantity: 1},
    ] 
    return productList;
  }
}

