import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ManagersComponent } from './pages/managers/managers.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
    ManagersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
