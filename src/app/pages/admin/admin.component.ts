import { Component, inject } from '@angular/core';
import { CardDirective } from '../../directives/card.directive';
import { TodoStore } from '../../store/todoStore';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CardDirective],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  todoStore = inject(TodoStore);
}
