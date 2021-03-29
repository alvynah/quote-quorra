import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightPopular]'
})
export class HighlightPopularDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.backgroundColor = 'rgb(48.2,24.7,0,0.8';

 }
}
