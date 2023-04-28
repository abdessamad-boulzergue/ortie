import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ort-button',
  templateUrl : './button.component.html',
  styleUrls: ['./button.css'],
})
export  class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  title = '';

  @Input()
  iconHead : string ='';

  
  @Input()
  iconTail : string ='';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'ort-button--primary' : 'ort-button--secondary';
    return ['ort-button', `ort-button--${this.size}`, mode];
  }

}
