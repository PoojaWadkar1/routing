import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { Route, Routes } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(private fb:FormBuilder){

  }
  signin!:FormGroup;
  ngOnInit():void{
    this.signin=this.fb.group({
      "name":['',[Validators.required,Validators.minLength (2),Validators.maxLength(10)]],
      "email":['',[Validators.required]],
      "password":['',[Validators.required]],
      "mobile":['',[Validators.required]]
    })

    console.log(this.email?.value)
  }
  save(){
    console.log(this.signin.value)
    console.log(this.signin);
    console.log(this.signin.invalid);
console.log(this.signin.valid);
console.log(this.signin.touched)

  }
  

get mobile(){
  return this.signin.get('mobile');
}

get name(){
  return this.signin.get('name');
}
get password(){
  return this.signin.get('password');
}
get email(){
  return this.signin.get('email')
}
}
