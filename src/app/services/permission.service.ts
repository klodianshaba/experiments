import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  permissions: number[] = [1, 2, 3];
  constructor() {}

  hasPermission(permission: number): boolean {
    return this.permissions.includes(permission);
  }
}
