import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import{DashboardComponent} from './components/dashboard/dashboard.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { PpcComponent } from './components/ppc/ppc.component';
import { LogicBuildingComponent } from './components/logic-building/logic-building.component';
import { InternshipComponent } from './components/internship/internship.component';
import { RawdataComponent } from './components/rawdata/rawdata.component';

const routes: Routes = [

  {path:'dashboard',component:DashboardComponent},
  { path:'log-in',component:LogInComponent},
  { path:'update-profile',component:UpdateProfileComponent}, {path:'logicBuilding' ,component:LogicBuildingComponent},
  {path:'ppc',component:PpcComponent},
  {path:'internship',component:InternshipComponent },
  {path:'rawdata',component:RawdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
