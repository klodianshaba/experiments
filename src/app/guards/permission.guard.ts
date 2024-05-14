import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { PermissionService } from '../services/permission.service';

export const permissionGuard = (permission: number): CanActivateFn => {
  return () => {
    const permissionService = inject(PermissionService);
    return permissionService.hasPermission(permission);
  };
};
