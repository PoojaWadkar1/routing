import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../Services.ts/http';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent {
createpost!:FormGroup;
constructor(private fb:FormBuilder,private httpService:HttpService){
  
}
ngOnInit(){

 this.postdata();

}
postdata(){
this.createpost=this.fb.group({
  'name':['',[Validators.required]],
  'mobile':['',[Validators.required]],
  'userId':['1']

})}
 save(){
   console.log(this.createpost.value);
   this.httpService.postDataToServer('posts',this.createpost.value).subscribe(
    (response:any)=>{
console.log(response);

    },
    ()=>{

    },
    ()=>{

    }
    
    
    
    )
 }}