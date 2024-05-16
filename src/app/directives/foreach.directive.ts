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
  selector: '[appForeach]',
  standalone: true,
})
export class ForeachDirective implements OnChanges {
  templateRef = inject(TemplateRef);
  viewContainerRef = inject(ViewContainerRef);
  @Input({ required: true }) appForeachOf: any[] = [];
  @Input() appForeachEmpty: TemplateRef<any> | undefined;
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    this.foreach(changes['appForeachOf'].currentValue);
  }

  foreach(items: any[]) {
    this.viewContainerRef.clear();
    if (items.length == 0) {
      if (this.appForeachEmpty)
        this.viewContainerRef.createEmbeddedView(this.appForeachEmpty);
      return;
    }
    items.forEach((item, index) => {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $implicit: item,
        index: index,
        first: index == 0,
        last: index == items.length - 1,
      });
    });
  }
}
