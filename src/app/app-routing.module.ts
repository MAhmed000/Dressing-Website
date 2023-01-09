import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MainComponent } from './component/main/main.component';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [
  {path:"",component:MainComponent},
  {path:"admin",canActivate:[AuthGuard],loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
