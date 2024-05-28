import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { TodoStore } from './store/todoStore';
import { Todos } from './datasource/todo-datasource';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [TodoStore],
})
export class AppComponent {
  title = 'experiments';
  todoStore = inject(TodoStore);
  constructor() {
    this.todoStore.setAll(Todos);
  }
}
