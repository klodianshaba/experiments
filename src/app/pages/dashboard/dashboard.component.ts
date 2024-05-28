import {
  afterRender,
  Component,
  effect,
  ElementRef,
  inject,
} from '@angular/core';
import { InsightsComponent } from '../../shared/insights/insights.component';
import { HasPermissionDirective } from '../../directives/has-permission.directive';
import { ForeachDirective } from '../../directives/foreach.directive';
import { CardDirective } from '../../directives/card.directive';
import { IfDirective } from '../../directives/if.directive';
import { percentage } from '../../../../../shared/utills';
import { todoStore } from '../../store/todoStore';
import { Todos } from '../../datasource/todo-datasource';
import { TodoModel } from '../../models/todoModel';

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
  todoStore = inject(todoStore);
  constructor() {
    afterRender(() => {
      this.elementRef.nativeElement.scrollHeight;
    });
    this.percentAmount = percentage(30, 28);
    effect(() => {
      console.log(this.todoStore.select(1)());
      console.log(this.todoStore.selectMany([1, 2])());
      console.log(this.todoStore.selectPredicate(entity => entity.done)());
    });
  }
  //set
  set() {
    this.todoStore.set(this.generateTodos()[0]);
  }
  setMany() {
    this.todoStore.setMany(this.generateTodos());
  }
  setAll() {
    this.todoStore.setAll(Todos);
  }
  //add
  add() {
    this.todoStore.add(this.generateTodos()[0]);
  }
  addMany() {
    this.todoStore.addMany(this.generateTodos());
  }
  //update
  update() {
    this.todoStore.update(1, { name: 'New name' }); // updating one entity
  }
  updateMany() {
    this.todoStore.updateMany([1, 2], { name: 'New name' }); // updating many entities
  }
  updateAll() {
    this.todoStore.updateAll({ name: 'New name' }); // updating all entities
  }
  updatePredicate() {
    this.todoStore.updatePredicate(entity => entity.done, { name: 'Done' }); // updating predicate
  }
  //remove
  remove() {
    this.todoStore.remove(1);
  }
  removeMany() {
    this.todoStore.removeMany([1, 2]);
  }
  removeAll() {
    this.todoStore.removeAll();
  }
  removePredicate() {
    this.todoStore.removePredicate(entity => entity.done);
  }

  generateTodos(): TodoModel[] {
    return [
      {
        id: Math.random(),
        name: Math.random().toString(),
        done: false,
        active: true,
      },
      {
        id: Math.random(),
        name: Math.random().toString(),
        done: false,
        active: true,
      },
    ];
  }
}
