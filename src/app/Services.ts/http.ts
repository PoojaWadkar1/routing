import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})



export class HttpService{

   


constructor(private http:HttpClient){

};
  baseUrl:string= "https://jsonplaceholder.typicode.com/";
     httpHeader:HttpHeaders=new HttpHeaders({
    'content-type':'application/json'
}); 

    postDataToServer(endPoint:string, data:any){
        const url= this.baseUrl + endPoint;
       return this.http.post(url,data,{headers:this.httpHeader}) ;
        
    }

get(){
    
}
    getDataFromServer(){

    }
}