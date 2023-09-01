import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MenuComponent } from './menu/menu.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BuyComponent } from './buy/buy.component';
import { ExpressComponent } from './express/express.component';
import { SelectComponent } from './select/select.component';
import { DeliverComponent } from './deliver/deliver.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { SigninComponent } from './signin/signin.component';
import { RegistrationComponent } from './registration/registration.component';
import { CreatepostComponent } from './createpost/createpost.component';

const routes: Routes = [{
path:'home', component:HomeComponent},
{path:'createpost', component:CreatepostComponent},
{path:'services', component:ServicesComponent,children:[
  {path:'buy',component:BuyComponent},
  {path:'express',component:ExpressComponent},
  {path:'select',component:SelectComponent},
  {path:'deliver',component:DeliverComponent}
]},
{path:'contact-us', component:ContactUsComponent,children:
[{
  path:'menu',component:MenuComponent
}]
 },
{path:'menu', component:MenuComponent},
{path:'product-details/:Id',component:ProductdetailsComponent},
{path:'',redirectTo:'/home', pathMatch:'full'},// Default path
{path:'**' , component:PagenotfoundComponent}
];

//    path:'home', component:HomeComponent},
// {path:'registration', component:RegistrationComponent
// },
// {path:'signin',component: SigninComponent},
// {path:'',redirectTo:'/registration',pathMatch:'full'}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
