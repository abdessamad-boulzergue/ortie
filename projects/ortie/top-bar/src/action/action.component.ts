import {Component, Input} from '@angular/core';

@Component({
  selector: 'ort-toolbar-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
})
export class ActionComponent {
  @Input() icon?: string;
  @Input() label?: string;
}
