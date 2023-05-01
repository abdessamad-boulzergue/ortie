import { Directive,ElementRef, OnInit ,Renderer2 } from '@angular/core';

@Directive({
  selector: '[slider-card]',
})
export class SliderCardDirective implements OnInit {
    constructor(private elementRef: ElementRef, private renderer:Renderer2) {}

    ngOnInit(): void {

      this.renderer.addClass(this.elementRef.nativeElement, 'slider-card');

    }

    get width():number{

        return parseInt(this.elementRef.nativeElement.scrollWidth);
    }
}