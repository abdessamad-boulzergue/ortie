import { Directive , Input , HostBinding } from "@angular/core";

@Directive({
  selector:'[ortCellGrid]',
})

export class CellGridComponent{

  @Input("column.span") columnSpan=1;
  
  @Input("row.span") rowSpan=1;

  @HostBinding('style.gridColumnStart')
  get _columnStart(){
    return "span ".concat(this.columnSpan.toString())
  }
  @HostBinding('style.gridRowStart')
  get _rowStart(){
    return "span ".concat(this.rowSpan.toString())
  }

}