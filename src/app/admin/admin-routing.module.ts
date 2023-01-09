import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddEditCategoryComponent } from './category/add-edit-category/add-edit-category.component';
import { CategoryComponent } from './category/category.component';
import { ContactMsgComponent } from './contact-msg/contact-msg.component';
import { LoginComponent } from './login/login.component';
import { StichComponent } from './orders/stich/stich.component';
import { UnstichComponent } from './orders/unstich/unstich.component';
import { AddEditPostComponent } from './post/add-edit-post/add-edit-post.component';
import { PostComponent } from './post/post.component';
import { AddNewUserComponent } from './users/add-new-user/add-new-user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"",component:AdminDashboardComponent,children:[
    {path:"",redirectTo:"wp-admin",pathMatch:"full"},
    {path:"post",component:PostComponent},
    {path:"post/add-post",component:AddEditPostComponent},
    {path:"post/edit-post/:id",component:AddEditPostComponent},
    {path:"contact-messsages",component:ContactMsgComponent},
    {path:"category",component:CategoryComponent},
    {path:"category/add-new-category",component:AddEditCategoryComponent},
    {path:"category/edit-category/:id",component:AddEditCategoryComponent},
    {path:"users",component:UsersComponent},
    {path:"users/add-new-user",component:AddNewUserComponent},
    {path:"orders/stich",component:StichComponent},
    {path:"orders/un-stich",component:UnstichComponent},
    {path:"wp-admin",component:LoginComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
