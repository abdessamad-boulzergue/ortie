import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ort-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  
  @Input() rowGap = 0;
  @Input() columnGap = 0;
  @Input('column.width') columnWidth = '1fr';
  @Input('row.height') rowHeight = '1fr';
  @Input() columns = 12;

  @Input('column.xs')
  public set XSmallColumns(v: number) {
    this._XSColumns = v;
  }
  public get XSmallColumns(): number {
    if (this.hasValue(this._XSColumns)) return this._XSColumns;
    return this.getColumnValue('XSmall');
  }
  @Input('column.sm')
  public set SmallColumns(v: number) {
    this._SMColumns = v;
  }
  public get SmallColumns(): number {
    if (this.hasValue(this._SMColumns)) return this._SMColumns;
    return this.getColumnValue('Small');
  }

  @Input('column.md')
  public set MediumColumns(v: number) {
    this._MDColumns = v;
  }
  public get MediumColumns(): number {
    if (this.hasValue(this._MDColumns)) return this._MDColumns;
    return this.getColumnValue('Medium');
  }
  @Input('column.lg')
  public set LargeColumns(v: number) {
    this._LGColumns = v;
  }
  public get LargeColumns(): number {
    if (this.hasValue(this._LGColumns)) return this._LGColumns;
    return this.getColumnValue('Large');
  }
  @Input('column.xlg')
  public set XLargeColumns(v: number) {
    this._XLGColumns = v;
  }
  public get XLargeColumns(): number {
    if (this.hasValue(this._XLGColumns)) return this._XLGColumns;
    return this.getColumnValue('XLarge');
  }

  @HostBinding('style.gridRowGap')
  get _gridRowGap(): string {
    return this.rowGap + 'px';
  }

  @HostBinding('style.gridColumnGap')
  get _gridColumnGap(): string {
    return this.columnGap + 'px';
  }

  @HostBinding('style.gridTemplateColumns')
  get _gridTemplateColumns(): string {
    let columnCount = this.columns;
    switch (this.size) {
      case 'XSmall':  columnCount = this.XSmallColumns; break;
      case 'Small':  columnCount =this.SmallColumns; break;
      case 'Medium':   columnCount =this.MediumColumns; break;
      case 'Large': columnCount =this.LargeColumns; break;
      case 'XLarge': columnCount =this.XLargeColumns; break;
    }

    return `repeat(${columnCount}, ${this.columnWidth})`;
  }

  @HostBinding('style.gridAutoRows')
  get autoRow(): string | undefined {
    if (this.rowHeight) return this.rowHeight;
    else return undefined;
  }

  private _XSColumns = -1;
  private _SMColumns = -1;
  private _MDColumns = -1;
  private _LGColumns = -1;
  private _XLGColumns = -1;
  private bpState!: BreakpointState;
  constructor(private breakPointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakPointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((state: BreakpointState) => {
        this.bpState = state;
      });
  }

  /**
   *  value is defined if it is bigger than -1 and not null.
   * @param {number} value
   * @return {boolean}
   */
  private hasValue(value: number): boolean {
    return  (value != null && value > -1) 
  }

  /**
   * @param {PageSize} column
   * @return {number}  
   */
  private getColumnValue(column: PageSize): number {
    switch (column) {
      case 'XSmall':
        if (this.hasValue(this._SMColumns)) return this._SMColumns;
        else if (this.hasValue(this._MDColumns)) return this._MDColumns;
        else if (this.hasValue(this._LGColumns)) return this._LGColumns;
        else if (this.hasValue(this._XLGColumns)) return this.XLargeColumns;
        else return this.columns;
      case 'Small':
        if (this.hasValue(this._MDColumns)) return this._MDColumns;
        else if (this.hasValue(this._LGColumns)) return this._LGColumns;
        else if (this.hasValue(this._XLGColumns)) return this.XLargeColumns;
        else if (this.hasValue(this.columns)) return this.columns;
        else return this._XSColumns;
      case 'Medium':
        if (this.hasValue(this._LGColumns)) return this._LGColumns;
        else if (this.hasValue(this._XLGColumns)) return this.XLargeColumns;
        else if (this.hasValue(this.columns)) return this.columns;
        if (this.hasValue(this._SMColumns)) return this._SMColumns;
        else return this._XSColumns;
      case 'Large':
        if (this.hasValue(this._XLGColumns)) return this.XLargeColumns;
        else if (this.hasValue(this.columns)) return this.columns;
        if (this.hasValue(this._MDColumns)) return this._MDColumns;
        if (this.hasValue(this._SMColumns)) return this._SMColumns;
        else return this._XSColumns;
      case 'XLarge':
        if (this.hasValue(this.columns)) return this.columns;
        if (this.hasValue(this._LGColumns)) return this._LGColumns;
        if (this.hasValue(this._MDColumns)) return this._MDColumns;
        if (this.hasValue(this._SMColumns)) return this._SMColumns;
        else return this._XSColumns;
    }
  }

  get size(): PageSize { 
    console.log(Breakpoints.XSmall);
    if (this.bpState.breakpoints[Breakpoints.XSmall]) return 'XSmall';
    else if (this.bpState.breakpoints[Breakpoints.Small]) return 'Small';
    else if (this.bpState.breakpoints[Breakpoints.Medium]) return 'Medium';
    else if (this.bpState.breakpoints[Breakpoints.Large]) return 'Large';
    else return 'XLarge';
  }

  
}

export type PageSize = 'XSmall' | 'Small' | 'Medium' | 'Large' | 'XLarge';
