import {
  Directive,
  inject,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { PermissionService } from '../services/permission.service';

@Directive({
  selector: '[appHasPermission]',
  standalone: true,
})
export class HasPermissionDirective {
  @Input({ required: true }) set appHasPermission(permission: number) {
    this.hasPermission(permission);
  }

  templateRef = inject(TemplateRef);
  viewContainerRef = inject(ViewContainerRef);
  permissionService = inject(PermissionService);
  constructor() {}

  hasPermission(permission: number) {
    if (this.permissionService.hasPermission(permission)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else this.viewContainerRef.clear();
  }
}
