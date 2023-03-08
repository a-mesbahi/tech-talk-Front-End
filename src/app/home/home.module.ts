import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { PodcastInterfaceComponent } from './layouts/podcast-interface/podcast-interface.component';
import { TimeConversionPipe } from './pipes/time-conversion.pipe';
import { AudioComponent } from './layouts/audio/audio.component';
import { PodcatDetailsComponent } from './pages/podcat-details/podcat-details.component';
import {RouterModule} from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    DiscoverComponent,
    AudioComponent,
    PodcastInterfaceComponent,
    TimeConversionPipe,
    PodcatDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxSkeletonLoaderModule.forRoot({ animation: 'pulse', loadingText: 'This item is actually loading...' }),

  ]
})
export class HomeModule { }
