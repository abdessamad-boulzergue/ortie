import { CommonModule  } from "@angular/common";
import { NgModule } from "@angular/core";
import { VerticalAlignComponent } from "./vertical-align.component";

@NgModule({
    declarations:[VerticalAlignComponent],
    imports:[CommonModule],
    exports:[VerticalAlignComponent]
})
export class VerticalAlignModule{

}