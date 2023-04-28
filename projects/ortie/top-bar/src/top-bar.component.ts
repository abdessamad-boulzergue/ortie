import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
} from '@angular/core';
import {ActionComponent} from './action/action.component';
import {ToolbarActionDirective} from './action/action.directive';
import {ToolbarUserDirective} from './user/user.directive';

@Component({
  selector: 'ort-toolbar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @ContentChildren(ToolbarActionDirective) _actionRefs!: QueryList<ToolbarActionDirective>;
  @ContentChild(ToolbarUserDirective) _userTemplateRef?: ToolbarUserDirective;
  @ContentChild('logo') _logoTemplate?: TemplateRef<HTMLElement>;

  @Input() actions: ToolbarAction[] = [];

  @HostBinding('style.position')
  @Input()
  position: ToolbarPosition = 'static';

  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.style.position = this.position;
  }

  ngOnInit(): void {
    document.body.classList.add('with-top-bar');
  }

  /**
   * finds a template for a given action identified by id property.
   *
   * @param {string} actionName
   * @return {TemplateRef<ActionComponent> | undefined}
   */
  _getActionTemplateRef(actionName: string): TemplateRef<ActionComponent> | undefined {
    const found = this._actionRefs.find(e => e.toolbarAction == actionName);
    if (found == null) {
      return this._actionRefs.find(e => e.toolbarAction == '' || e.toolbarAction == null)
        ?.templateRef;
    } else {
      return found.templateRef;
    }
  }
}

export interface ToolbarAction {
  id: string;
  type?: ToolbarActionType;
  label?: string;
  icon?: string;
  onClick?: () => void;
  onHover?: () => void;
  link?: string;
}

export type ToolbarPosition = 'absolute' | 'fixed' | 'static' | 'relative';
export type ToolbarActionType = 'icon' | 'link';
