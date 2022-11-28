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
import {TopBarActionDirective} from './action/action.directive';
import {TopBarUserDirective} from './user/user.directive';

@Component({
  selector: 'cb-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  @ContentChildren(TopBarActionDirective) _actionRefs!: QueryList<TopBarActionDirective>;
  @ContentChild(TopBarUserDirective) _userTemplateRef?: TopBarUserDirective;
  @ContentChild('logo') _logoTemplate?: TemplateRef<HTMLElement>;

  @Input() actions: TopBarAction[] = [];

  @HostBinding('style.position')
  @Input()
  position: TopBarPosition = 'static';

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
    const found = this._actionRefs.find(e => e.topBarAction == actionName);
    if (found == null) {
      return this._actionRefs.find(e => e.topBarAction == '' || e.topBarAction == null)
        ?.templateRef;
    } else {
      return found.templateRef;
    }
  }
}

export interface TopBarAction {
  id: string;
  type?: TopBarActionType;
  label?: string;
  icon?: string;
  onClick?: () => void;
  onHover?: () => void;
  link?: string;
}

export type TopBarPosition = 'absolute' | 'fixed' | 'static' | 'relative';
export type TopBarActionType = 'icon' | 'link';
