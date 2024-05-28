import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { todoStore } from '../../store/todoStore';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  todoStore = inject(todoStore);
}
