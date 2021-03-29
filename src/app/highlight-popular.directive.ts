import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightPopular]'
})
export class HighlightPopularDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.backgroundColor = 'cyan';

 }
}
