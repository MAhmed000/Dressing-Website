import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './shop-now/category/category.component';
import { ConfirmOrderComponent } from './shop-now/confirm-order/confirm-order.component';
import { ShopNowComponent } from './shop-now/shop-now.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"",component:MainComponent,children:[
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent},
    {path:"login",component:LoginComponent},
    {path:"sign-up",component:SignupComponent},
    {path:"shop-now",component:ShopNowComponent},
    {path:"summer/:id",component:CategoryComponent},
    {path:"winter/:id",component:CategoryComponent},
    {path:"confirm-order",component:ConfirmOrderComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
