import { afterRender, Component, ElementRef, inject } from '@angular/core';
import { InsightsComponent } from '../../shared/insights/insights.component';
import { HasPermissionDirective } from '../../directives/has-permission.directive';
import { ForeachDirective } from '../../directives/foreach.directive';
import { CardDirective } from '../../directives/card.directive';
import { IfDirective } from '../../directives/if.directive';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    InsightsComponent,
    HasPermissionDirective,
    ForeachDirective,
    CardDirective,
    IfDirective,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  elementRef = inject(ElementRef<HTMLElement>);
  constructor() {
    afterRender(() => {
      this.elementRef.nativeElement.scrollHeight;
    });
  }
}
