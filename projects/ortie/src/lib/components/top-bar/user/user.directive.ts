import {Directive, TemplateRef} from '@angular/core';
import {UserComponent} from './user.component';

@Directive({
  selector: 'ng-template.[topBarUser]',
})
export class TopBarUserDirective {
  constructor(public templateRef: TemplateRef<UserComponent>) {}
}
