import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentRoutingModule } from './component-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ShopNowComponent } from './shop-now/shop-now.component';
import { CategoryComponent } from './shop-now/category/category.component';
import { ConfirmOrderComponent } from './shop-now/confirm-order/confirm-order.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    ShopNowComponent,
    CategoryComponent,
    ConfirmOrderComponent,
    AddtocartComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class ComponentModule { }
