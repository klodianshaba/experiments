import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemsStore } from '../../store/items.store';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  ItemsStore = inject(ItemsStore);
}
