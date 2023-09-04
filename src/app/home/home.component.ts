import { Component } from '@angular/core';
import { Observable, filter,map } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 numArr:number[]=[];
  
ngOnInit(){
  console.log('ngOnInit')
  console.log('start');
 this.fetchdata().then((el:any)=>{
  console.log(el);
  
 })
const obs$=new Observable((obs)=>{
const data=[1,2,3,45,3,26];
setTimeout(()=>{
  obs.next(data);
},1000)
}
//   setTimeout(()=>{obs.next(100);
//   obs.next(200);
//   obs.next(432);
//   obs.next(500);
// },1000)
// }).pipe(filter((el:any)=>
//   el>200),
// map((el:any)=>el*2)
)


obs$.subscribe({
  next: (el:any)=>{
  
    console.log(el);
  },
  error: ()=>{

  },
  complete: ()=>{

  }
}

  
) 
  }
  // this.fetchdata()
  // .then((el:any)=>{
//     this.numArr=el;
//     // this.numArr=this.numArr.filter(el=>el>2);
//     console.log(this.numArr);
//     console.log('response received',el);
// }).catch((error)=>{
//   console.log('error',error);
  
// });
// console.log('end');

/// Observables ///
//  const observable1= new Observable((obs)=>{
//   setTimeout(()=>{
//     obs.next(200);
//   },2000);
//   setTimeout(()=>
//   {
//     obs.next(300);
//   },1000);
//   // obs.error('Error')
 
// })
// observable1.subscribe(
//   (el: any) => {
//     console.log(el);
//   },
//   (error) => {
//     console.log(error);
//   },
//   () => {}
// );



/// Promises ///
 fetchdata(){
  return new Promise((resolve,reject)=>{
    let data=[12,23,34];
    setTimeout(()=>{
      resolve(data);
    })
      
    }
  )
 }


}
  // getData(){
  //   throw new Error('Method not implemented.');
  // }
  

  

 












function getData() {
  throw new Error('Function not implemented.');
}

