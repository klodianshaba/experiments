import { Component } from '@angular/core';
import { CardDirective } from '../../directives/card.directive';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CardDirective],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {}
