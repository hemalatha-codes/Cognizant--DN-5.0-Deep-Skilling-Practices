import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Changes border layout styling immediately upon hover interaction entry
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.02)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.2s ease');
    this.renderer.setStyle(this.el.nativeElement, 'border-color', '#3498db');
  }

  // Reverts border layout properties smoothly back upon hover interaction exit
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.0)');
    this.renderer.setStyle(this.el.nativeElement, 'border-color', '#e0e0e0');
  }
}