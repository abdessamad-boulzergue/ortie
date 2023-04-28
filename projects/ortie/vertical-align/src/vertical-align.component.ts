import { Component , HostBinding , Input} from "@angular/core";

@Component({
 selector:'ort-vertical-align',
 templateUrl:'./vertical-align.component.html',
 styleUrls : ['./vertical-align.component.css']
})

export class VerticalAlignComponent{

    @Input("width") width = '100%';
    @Input("vposition") vposition : VERTICALALIGN="center"
    @Input("hposition") hposition : HORIZONTALALIGN ="center"

    @HostBinding("style.justify-content")
    get _justifyContent()  : HORIZONTALALIGN{
        return this.hposition;
    }

    @HostBinding("style.align-items")
    get _itemAlign()  : VERTICALALIGN{
        return this.vposition;
    }
    @HostBinding("style.width")
    get _width()  : string{
        return this.width;
    }
}

export type VERTICALALIGN = 'start' | 'center' | 'stretch' | 'end';
export type HORIZONTALALIGN = 'start' | 'center' | 'space-evenly' | 'stretch' | 'end';