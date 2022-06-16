import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import{DashboardComponent} from './components/dashboard/dashboard.component';
import { LogInComponent } from './components/log-in/log-in.component';

const routes: Routes = [

  {path:'dashboard',component:DashboardComponent},
  { path:'log-in',component:LogInComponent},
  {path:'create-profile', component: CreateProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
