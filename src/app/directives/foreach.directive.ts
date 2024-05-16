import {
  Directive,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
export interface ForeachTemplateContext<T> {
  $implicit: T;
  index: number;
  first: boolean;
  last: boolean;
}
@Directive({
  selector: '[appForeach]',
  standalone: true,
})
export class ForeachDirective<T> implements OnChanges {
  templateRef = inject(TemplateRef);
  viewContainerRef = inject(ViewContainerRef);
  @Input({ required: true }) appForeachOf: T[] = [];
  @Input() appForeachEmpty: TemplateRef<any> | undefined;
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    this.foreach(changes['appForeachOf'].currentValue);
  }
  static ngTemplateContextGuard<T>(
    dir: ForeachDirective<T>,
    ctx: any
  ): ctx is ForeachTemplateContext<T> {
    return true;
  }

  foreach(items: T[]) {
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
