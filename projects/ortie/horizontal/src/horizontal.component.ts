import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'ort-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.css'],
})
export class HorizontalComponent {
  @Input('position.vertical') positionVertical:  VerticalPosition = 'center';
  @Input('position.horizontal') positionHorizontal:  HorizontalPosition = 'start';
  @Input('width') width = '100%';
  @Input() height = 'auto';
  @Input() gap = 0;

  @HostBinding('style.justify-content')
  get _justifyContent(): VerticalPosition {
    return this.positionVertical;
  }

  @HostBinding('style.align-items')
  get _alignItems(): HorizontalPosition {
    return this.positionHorizontal;
  }

  @HostBinding('style.width')
  get _width(): string {
    return this.width;
  }

  @HostBinding('style.gap')
  get _gap(): string {
    return `${this.gap}px`;
  }

  @HostBinding('style.height')
  get _height(): string {
    return this.height;
  }
}

export type HorizontalPosition = 'start' | 'end' | 'center' | 'stretch';
export type VerticalPosition =
  | 'start'
  | 'end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';
