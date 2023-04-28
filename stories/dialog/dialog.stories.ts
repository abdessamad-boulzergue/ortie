import { Component ,Input,Output,EventEmitter} from '@angular/core';
import { Dialog, DialogModule, DialogRef, DialogRole } from "@angular/cdk/dialog";
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonsModule } from '@abdos/ortie/button';
import { DialogType , DialogModule as ortDialogModule} from '@abdos/ortie/dialog';



@Component({
    // component metadata
    template: `
      <ort-dialog [type]="severity" [width]="width">
        <ng-template modalTitle>Title</ng-template>
        <ng-template modalContent>Content</ng-template>
        <ng-template modalActions>
            <ort-button size="small" title="close" (click)="closeDialog()"></ort-button>
            </ng-template>
      </ort-dialog>
    `,
    standalone: true,
    imports: [
        ortDialogModule,
      ButtonsModule
    ]
  })
 class DialogComponent {

    @Input() width: number = 200;
    @Input() severity: DialogType = 'info';
  
    constructor(private dialogRef: DialogRef) {}
  
    closeDialog() {
      this.dialogRef.close();
    }
  }

@Component({
    // component metadata.
    selector: 'modal-example',
    template: `
      <ort-button (click)="openDialog()" title="open dialog" ></ort-button>
    `,
    standalone: true,
    imports: [ButtonsModule, DialogModule]
  })
   class ExampleComponent {
  
    @Input() width: number = 200;
    @Input() severity: DialogType= 'info';
  
    @Output() closed: EventEmitter<any> = new EventEmitter();
  
    constructor(private dialog: Dialog) {}
  
    openDialog() {
        console.log(this.dialog)
      this.dialog.open(DialogComponent).closed.subscribe(() => {
        this.closed.emit();
      });
    }
  }
export default {
    title: 'Dialog/dialog',
    component: ExampleComponent,
    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
    argTypes: { },
  } as Meta;

  const Template: Story<ExampleComponent> = (args: ExampleComponent) => ({
    props: args,
    template:'<modal-example [severity]="severity" [width]="width ?? 200"  ></modal-example>'
  });

  export const BasicDialog = Template.bind({});
  BasicDialog.args={
    severity:'info',
    width:100
  }