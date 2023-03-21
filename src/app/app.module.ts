import { PodcasterModule } from './podcaster/podcaster.module';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import {HomeModule} from "./home/home.module";
import {ManagerModule} from "./manager/manager.module";
import {AdminModule} from "./admin/admin.module";
import { AuthModule } from './auth/auth.module';
import { InterceptorService } from './shared/interceptors/interceptor.service';
import { EnvPipe } from './shared/pipes/env.pipe';
import { HomeComponent } from './podcaster/home/home.component';
import { PlayBackAudioComponent } from './home/layouts/play-back-audio/play-back-audio.component';

import { FooterComponent } from './shared/footer/footer.component';
import {HomeComponent as AdminHomeComponent } from './admin/pages/home/home.component'
import { SharedModule } from "./shared/shared.module";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        EnvPipe,
        HomeComponent,
        PlayBackAudioComponent,
        FooterComponent,
        AdminHomeComponent
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
    bootstrap: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        HomeModule,
        ManagerModule,
        AdminModule,
        AuthModule,
        PodcasterModule,
        SharedModule
    ]
})
export class AppModule { }
