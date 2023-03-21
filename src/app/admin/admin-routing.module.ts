import { HomeComponent } from '../admin/pages/home/home.component';

import { Routes } from '@angular/router';
import { PodcastersComponent } from './pages/podcasters/podcasters.component';
import { PodcastsComponent } from './pages/podcasts/podcasts.component';


export const ADMIN_ROUTES: Routes = [
  {path:"",component:HomeComponent,children:[
    {path:'',component:PodcastersComponent},
    {path:'podcasts',component:PodcastsComponent},
  ]},
  
];
