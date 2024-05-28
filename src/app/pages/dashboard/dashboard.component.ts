import { afterRender, Component, ElementRef, inject } from '@angular/core';
import { InsightsComponent } from '../../shared/insights/insights.component';
import { HasPermissionDirective } from '../../directives/has-permission.directive';
import { ForeachDirective } from '../../directives/foreach.directive';
import { CardDirective } from '../../directives/card.directive';
import { IfDirective } from '../../directives/if.directive';
import { percentage } from '../../../../../shared/utills';
import { ItemsStore } from '../../store/items.store';

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
  percentAmount: number = 0;
  itemsStore = inject(ItemsStore);
  constructor() {
    afterRender(() => {
      this.elementRef.nativeElement.scrollHeight;
    });
    this.percentAmount = percentage(30, 28);
    this.itemsStore.entities();
  }
  add() {
    this.itemsStore.add({ id: 10, name: Math.random().toString() });
  }
  remove(id: number) {
    this.itemsStore.remove(id);
  }
}
