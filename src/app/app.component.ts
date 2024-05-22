import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { ItemsStore } from './store/items.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ItemsStore],
})
export class AppComponent {
  title = 'experiments';
  items = [
    { id: 1, name: 'Klodian' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Clevio' },
    { id: 4, name: 'Dickerson' },
    { id: 5, name: 'Marvino' },
  ];
  ItemsStore = inject(ItemsStore);
  constructor() {
    this.ItemsStore.load(this.items);
  }
}
