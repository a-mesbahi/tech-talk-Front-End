import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagersComponent } from './pages/managers/managers.component';
import { PodcastersComponent } from './pages/podcasters/podcasters.component';
import { PodcastsComponent } from './pages/podcasts/podcasts.component';
import { PodcastPopUpComponent } from './layouts/podcast-pop-up/podcast-pop-up.component';
import { AudioComponent } from './layouts/audio/audio.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        ManagersComponent,
        PodcastersComponent,
        PodcastsComponent,
        PodcastPopUpComponent,
        AudioComponent,
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class AdminModule { }
