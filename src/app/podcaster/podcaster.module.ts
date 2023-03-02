import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AddPodcastComponent } from './add-podcast/add-podcast.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SeeSubscribersComponent } from './see-subscribers/see-subscribers.component';

@NgModule({
  declarations: [

    AddPodcastComponent,
    SeeSubscribersComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  exports:[]
})
export class PodcasterModule { }
