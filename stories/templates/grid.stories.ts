import { CardModule } from "@abdos/ortie/card";
import { GridComponent,GridModule } from "@abdos/ortie/grid";
import {  Meta, moduleMetadata, Story } from '@storybook/angular';
export default {
    title: 'Templates/Grid',
    component: GridComponent,
    decorators: [
        moduleMetadata({
          declarations: [],
          imports: [GridModule, CardModule],
        }),
      ],    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
    argTypes: { },
  } as Meta;

  const Template: Story<GridComponent> = (args: GridComponent) => ({
    props: args,
    styles: [`
    ort-card {  background-color: #33458B; color: white }
  `],
    template:`
    <ort-grid [rowGap]="rowGap" [columnGap]="columnGap"
      [columns]="columns"
      [column.xs]="XSmallColumns"
      [column.sm]="SmallColumns"
      [column.md]="MediumColumns"
      [column.lg]="LargeColumns"
      [column.xlg]="XLargeColumns"
      [column.width]="columnWidth"
      [row.height]="rowHeight"
      >
      <ort-card ortCellGrid  column.span="2"  row.span="2" >  start  </ort-card>

        <ng-container *ngFor="let i of [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18]">
          <ort-card>
            {{i}}
          </ort-card>
        </ng-container>

        <ort-card>  infinity  </ort-card>

      </ort-grid>
    `
  });

  export const Grid = Template.bind({});
  Grid.args = {
    columnGap: 10,
    rowGap: 10,
    columns: 5,
    XSmallColumns: 2,
    SmallColumns: 4,
    MediumColumns: 6,
    LargeColumns: 8,
    XLargeColumns: 10,
    columnWidth: '1fr',
    rowHeight: '80px'
  };
  