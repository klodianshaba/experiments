import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.scss',
})
export class InsightsComponent {
  user = input.required<string>();
  userChange = output<string>();
  constructor() {}

  onChange() {
    this.userChange.emit(this.user() + ' Changed');
  }
}
