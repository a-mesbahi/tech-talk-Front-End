import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADMIN_ROUTES } from './admin/admin-routing.module';
import { Auth_ROUTES } from './auth/auth-routing.module';
import { HOME_ROUTES } from './home/home-routing.module';
import { MANAGER_ROUTES } from './manager/manager-routing.module';
import { PODCASTER_ROUTES } from './podcaster/podcaster-routing.module';
import { AuthGuardGuard } from './shared/guards/auth-guard.guard';

const routes: Routes = [
  { path: '', children: HOME_ROUTES },
  { path: 'auth', children: Auth_ROUTES },
  { path: 'admin', children: ADMIN_ROUTES },
  { path: 'manager', children: MANAGER_ROUTES },
  { path: 'podcaster', children: PODCASTER_ROUTES, canActivate:[AuthGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
