import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../Services.ts/ProductService';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  //  productObj:ProductService;
  productList: any;
  Sort: number | null = null;
  Pageno: number | null = null;
  constructor(
    private router: Router,
    private productObj: ProductService,
    private activatedroute: ActivatedRoute
  ) {
    console.log(this.activatedroute);
    console.log(this.router);
    //   this.productObj=new ProductService();
    this.productObj.setMessage('Good Evening');
    const message = this.productObj.getMessage();
    console.log(message);
  }
  previousid: number | null = null;

  navigatetoProductDtls(Id: number) {
    this.productObj.setproductId(Id);
    this.router.navigate(['/product-details', Id],
      {
        queryParams: { 'Sort': 'ASC', 'PageNum': 2 },
      });
  }

  ngOnInit(): void {
    this.previousid = Number(
      this.activatedroute.snapshot.queryParamMap.get('id')
    );

    console.log(this.previousid);
    this.productList = this.productObj.getProducts();
    console.log(this.productList);
    // this.productObj.setproductId(1);
  }
} 

