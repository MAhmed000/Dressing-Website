import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';
import { AddEditPostComponent } from './post/add-edit-post/add-edit-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactMsgComponent } from './contact-msg/contact-msg.component';
import { CategoryComponent } from './category/category.component';
import { AddEditCategoryComponent } from './category/add-edit-category/add-edit-category.component';
import { UsersComponent } from './users/users.component';
import { AddNewUserComponent } from './users/add-new-user/add-new-user.component';
import { OrdersComponent } from './orders/orders.component';
import { StichComponent } from './orders/stich/stich.component';
import { UnstichComponent } from './orders/unstich/unstich.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PostComponent,
    AddEditPostComponent,
    ContactMsgComponent,
    CategoryComponent,
    AddEditCategoryComponent,
    UsersComponent,
    AddNewUserComponent,
    OrdersComponent,
    StichComponent,
    UnstichComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class AdminModule { }
