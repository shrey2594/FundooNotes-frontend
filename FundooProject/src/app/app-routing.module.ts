import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { NotedashboardComponent } from './components/notedashboard/notedashboard.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:RegistrationComponent},
  {path:'forgetPassword',component:ForgetpasswordComponent},
  {path:'resetPassword',component:ResetpasswordComponent},
  {path:'notedashboard',component:NotedashboardComponent,
 children:[
  {path:'',redirectTo:"/notedashboard/getallnotes",pathMatch:"full"},
  {path:'getallnotes',component:GetallnotesComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
