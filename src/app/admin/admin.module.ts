import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagersComponent } from './pages/managers/managers.component';
import { PodcastersComponent } from './pages/podcasters/podcasters.component';


@NgModule({
  declarations: [

    ManagersComponent,
    PodcastersComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class AdminModule { }
