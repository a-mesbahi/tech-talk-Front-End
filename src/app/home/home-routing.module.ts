import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { PodcatDetailsComponent } from './pages/podcat-details/podcat-details.component';
import { DiscoverComponent } from './pages/discover/discover.component';

export const HOME_ROUTES: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'details',component:PodcatDetailsComponent},
  {path:'discover',component:DiscoverComponent},
  // { path: '**', pathMatch: 'full', 
  //   component: NotFoundComponent },
];
