import {Directive, TemplateRef} from '@angular/core';
import {UserComponent} from './user.component';

@Directive({
  selector: 'ng-template.[toolbarUser]',
})
export class ToolbarUserDirective {
  constructor(public templateRef: TemplateRef<UserComponent>) {}
}
