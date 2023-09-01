import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Services.ts/ProductService';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  selectedProductId:string |null=null;

  // productObj: ProductService; 
  constructor(private activatedroute:ActivatedRoute, private productObj:ProductService){
    console.log(this.activatedroute);
    this.selectedProductId=this.activatedroute.snapshot.paramMap.get('Id');
    console.log("sel",this.selectedProductId);
    // this.productObj=new ProductService();
    const message=this.productObj.getMessage();
    console.log(message);
    
  } 
  Sort:string|null=null;
  Pageno:number|null=null;
  ngOnInit(){
  this.Sort=this.activatedroute.snapshot.queryParamMap.get('Sort');
this.Pageno=Number(this.activatedroute.snapshot.queryParamMap.get('PageNum'));
console.log(this.Sort);
console.log(this.Pageno);
const productList= this.productObj.getProducts();
console.log(productList);
 console.log('Id received from service',this.productObj.getproductId());
 

}
}
