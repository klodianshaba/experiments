import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { todoStore } from './store/todoStore';
import { Todos } from './datasource/todo-datasource';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [todoStore],
})
export class AppComponent {
  title = 'experiments';
  todoStore = inject(todoStore);
  constructor() {
    this.todoStore.setAll(Todos);
  }
}
