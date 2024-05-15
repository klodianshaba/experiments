import { afterRender, Component, ElementRef, inject } from '@angular/core';
import { InsightsComponent } from '../../shared/insights/insights.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [InsightsComponent],
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
