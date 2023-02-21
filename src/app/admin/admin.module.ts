import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagersComponent } from './pages/managers/managers.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
    ManagersComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class AdminModule { }
