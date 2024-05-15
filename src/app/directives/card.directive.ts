import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appCard]',
  standalone: true,
})
export class CardDirective {
  elementRef = inject(ElementRef<HTMLElement>);

  @HostBinding('style.width') @Input() width = 'auto';
  @HostBinding('style.height') @Input() height: string = 'auto';
  @HostBinding('style.transform') transform: string = '';
  @Input() hoverScale: string = 'var(--hover-scale)';
  @HostListener('mouseenter', ['$event'])
  onHover() {
    this.onTransform(this.hoverScale);
  }
  @HostListener('mouseleave', ['$event'])
  onMouseLeave() {
    this.onTransform('1');
  }
  constructor() {
    this.elementRef.nativeElement.style.cursor = 'pointer';
    this.elementRef.nativeElement.style.transition =
      'var(--transition-duration)';
    this.elementRef.nativeElement.style.borderRadius = 'var(--border-radius)';
    this.elementRef.nativeElement.style.padding = 'var(--padding)';
    this.elementRef.nativeElement.style.boxShadow = 'var(--box-shadow)';
  }
  onTransform(scale: string) {
    this.transform = 'scale(' + scale + ')';
  }
}
