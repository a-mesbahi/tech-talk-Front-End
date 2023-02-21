import { ManagerRoutingModule } from './manager/manager-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import {HomeModule} from "./home/home.module";
import {ManagerModule} from "./manager/manager.module";
import {AdminModule} from "./admin/admin.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    HomeRoutingModule,
    ManagerRoutingModule,
    HomeModule,
    ManagerModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
