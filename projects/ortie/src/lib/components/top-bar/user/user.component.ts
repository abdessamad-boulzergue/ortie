import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'cb-topbar-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() firstname?: string;
  @Input() lastname?: string;

  _getAvatar(): string {
    if (this.firstname && this.lastname) {
      return (this.firstname.charAt(0) + this.lastname.charAt(0)).toUpperCase();
    } else if (this.firstname) {
      return this.firstname.charAt(0).toUpperCase();
    } else if (this.lastname) {
      return this.lastname.charAt(0).toUpperCase();
    } else {
      return 'NO';
    }
  }

  _getName() {
    if (this.firstname && this.lastname) {
      return this.firstname + ' ' + this.lastname;
    } else if (this.firstname) {
      return this.firstname;
    } else if (this.lastname) {
      return this.lastname;
    } else {
      return undefined;
    }
  }

  @HostBinding('tabindex')
  get tabindex(): number {
    return 0;
  }
}
