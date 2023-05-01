import { Component, ViewChild,ContentChildren,AfterContentInit,QueryList,ElementRef } from '@angular/core';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { SliderCardDirective } from './slider-card.directive';
@Component({
  selector: 'ort-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent  implements AfterContentInit {

  @ContentChildren(SliderCardDirective) childComponents!: QueryList<SliderCardDirective>;
  @ViewChild(CdkScrollable) scrollable!: CdkScrollable; 
  private index:number = 0;
  scrollWidth :number=0;
  ngAfterContentInit() {
    this.childComponents.forEach((childDirective) => {
      this.scrollWidth+= childDirective.width;
    });
  }

  scrollLeft() {

    console.log(this.index)
 
    if(this.index>0){
      const cardWidth = this.childComponents.get(this.index--)?.width || 0;
      this.scrollable.scrollTo({ left: (this.scrollable.measureScrollOffset('left') || 0) - cardWidth, behavior: 'smooth' });
    }else{
      this.index = this.childComponents.length-1;
      this.scrollable.scrollTo({ left: (this.scrollable.measureScrollOffset('left') || 0) +this.scrollWidth, behavior: 'smooth' });

    }
    
  }

  scrollRight() {

    if(this.index<this.childComponents.length-1){
      const cardWidth = this.childComponents.get(this.index++)?.width || 0;
      this.scrollable.scrollTo({ left: (this.scrollable.measureScrollOffset('left') || 0) + cardWidth, behavior: 'smooth' });
    }else{
      this.scrollable.scrollTo({ left: (this.scrollable.measureScrollOffset('left') || 0) -this.scrollWidth, behavior: 'smooth' });
      this.index = 0;
    }
    
  }

}
