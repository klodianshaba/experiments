import { Routes } from '@angular/router';
import { permissionGuard } from './guards/permission.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        c => c.DashboardComponent
      ),
    canActivate: [permissionGuard(1)],
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin.component').then(c => c.AdminComponent),
    canActivate: [permissionGuard(5)],
  },
];
