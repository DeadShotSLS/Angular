import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'login' ,component:LoginComponent},
  {path:'register' ,component:RegisterComponent},
  {path:'addTask' ,component:AddTaskComponent},
  {path:'viewTask' ,component:ViewTaskComponent},
  {path:'updateTask' ,component:UpdateTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
