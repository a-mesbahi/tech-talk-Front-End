import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { PodcatDetailsComponent } from './pages/podcat-details/podcat-details.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { AboutComponent } from './pages/about/about.component';
import { PodcasterDetailsComponent } from './pages/podcaster-details/podcaster-details.component';

export const HOME_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'details/:id', component: PodcatDetailsComponent },
  { path: 'podcaster/details/:id', component: PodcasterDetailsComponent },
  { path: 'discover', component: DiscoverComponent },
  // { path: '**', pathMatch: 'full',
  //   component: NotFoundComponent },
];
