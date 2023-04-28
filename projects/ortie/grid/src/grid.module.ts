import { CommonModule } from "@angular/common";
import { GridComponent } from "./grid.component";
import { NgModule } from "@angular/core";

import { CellGridComponent } from "./cell-grid/cell-grid.component";
@NgModule({
    declarations: [GridComponent,CellGridComponent],
    imports:[CommonModule],
    exports:[GridComponent,CellGridComponent]
})
export class GridModule{

}