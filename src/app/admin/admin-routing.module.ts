import { HomeComponent } from '../admin/pages/home/home.component';

import { Routes } from '@angular/router';
import { PodcastersComponent } from './pages/podcasters/podcasters.component';


export const ADMIN_ROUTES: Routes = [
  {path:"",component:HomeComponent,children:[
    {path:'podcasters',component:PodcastersComponent},
  ]},
  
];
