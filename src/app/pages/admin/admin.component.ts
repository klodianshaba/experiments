import { Component, inject } from '@angular/core';
import { CardDirective } from '../../directives/card.directive';
import { ItemsStore } from '../../store/items.store';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CardDirective],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  ItemsStore = inject(ItemsStore);
}
