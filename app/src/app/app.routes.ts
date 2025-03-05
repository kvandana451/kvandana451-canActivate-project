import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { AdminDashboardComponent } from '../components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from '../components/user-dashboard/user-dashboard.component';
import { ManagerDashboardComponent } from '../components/manager-dashboard/manager-dashboard.component';
import { adminGuard } from '../guards/admin.guard';
import { UnauthorizedComponent } from '../components/unauthorized/unauthorized.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent,
    canActivate: [adminGuard],
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'user/dashboard', component: UserDashboardComponent },
  { path: 'manager/dashboard', component: ManagerDashboardComponent },
];
