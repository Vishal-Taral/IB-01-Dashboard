import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PpcComponent } from './components/ppc/ppc.component';
import { InternshipComponent } from './components/internship/internship.component';
import { LogicBuildingComponent } from './components/logic-building/logic-building.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { RawdataComponent } from './components/rawdata/rawdata.component'
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NewUserComponent } from './components/new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserDataComponent,
    LogInComponent,
    DashboardComponent,
    SidebarComponent,
    NewUserComponent,
    PpcComponent,
    InternshipComponent,
    LogicBuildingComponent,
    UpdateProfileComponent,
    CreateProfileComponent,
    RawdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatToolbarModule,
    MatSidenavModule,MatListModule,
    MatIconModule,
    MatButtonModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
