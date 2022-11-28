import {Directive, Input, TemplateRef} from '@angular/core';
import {ActionComponent} from './action.component';

@Directive({
  selector: 'ng-template.[topBarAction]',
})
export class TopBarActionDirective {
  @Input() public topBarAction?: string;

  constructor(public templateRef: TemplateRef<ActionComponent>) {}
}
