import {Directive, Input, TemplateRef} from '@angular/core';
import {ActionComponent} from './action.component';

@Directive({
  selector: 'ng-template.[toolBarAction]',
})
export class ToolbarActionDirective {
  @Input() public toolbarAction?: string;

  constructor(public templateRef: TemplateRef<ActionComponent>) {}
}
