import {Component,  ViewChild ,HostBinding, Input} from '@angular/core';
 


@Component({
    selector:"ort-text-input",
    templateUrl:'./text-input.component.html',
    styleUrls:["./text-input.component.css"]
})
export class TextInputComponent{


    @Input('label') label?: string = undefined;
    @Input('caption') caption?: string = undefined;
    @Input('iconStart') iconStart?: string = undefined;
    @Input('iconEnd') iconEnd?:string = undefined;
    @Input('status') status?: InputStatus = 'normal';
    @Input('info') info?: string;
   
  }
  
  export type InputStatus = 'error' | 'disabled' | 'normal';