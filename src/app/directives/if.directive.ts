import {
  Directive,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appIf]',
  standalone: true,
})
export class IfDirective implements OnChanges {
  templateRef = inject(TemplateRef);
  viewContainerRef = inject(ViewContainerRef);

  @Input() appIf: boolean | undefined;
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    this.render(changes['appIf'].currentValue);
  }
  render(condition: boolean) {
    if (condition) this.viewContainerRef.createEmbeddedView(this.templateRef);
    else this.viewContainerRef.clear();
  }
}
