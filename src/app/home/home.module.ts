import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { PodcastInterfaceComponent } from './layouts/podcast-interface/podcast-interface.component';
import { PodcatDetailsComponent } from './pages/podcat-details/podcat-details.component';
import {RouterModule} from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AudioComponent } from './layouts/audio/audio.component';
import { AboutComponent } from './pages/about/about.component';
import { PodcasterDetailsComponent } from './pages/podcaster-details/podcaster-details.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        HomeComponent,
        ContactComponent,
        DiscoverComponent,
        PodcastInterfaceComponent,
        PodcatDetailsComponent,
        AudioComponent,
        AboutComponent,
        PodcasterDetailsComponent
    ],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        RouterModule,
        FormsModule,
        NgxSkeletonLoaderModule.forRoot({ animation: 'pulse', loadingText: 'This item is actually loading...' }),
        SharedModule
    ]
})
export class HomeModule { }
