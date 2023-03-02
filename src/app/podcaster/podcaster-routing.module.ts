import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AddPodcastComponent } from './add-podcast/add-podcast.component';
import { HomeComponent } from './home/home.component';
import { SeeSubscribersComponent } from './see-subscribers/see-subscribers.component';

export const PODCASTER_ROUTES: Routes = [
    {path:"",component:HomeComponent,children:[
        {path:"add/podcast",component:AddPodcastComponent},
        {path:"see/subcrubers",component:SeeSubscribersComponent},
    ]}
];
