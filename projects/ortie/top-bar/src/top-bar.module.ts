import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ToolbarActionDirective} from './action/action.directive';
import {ToolbarSeparatorComponent} from './top-bar-separator/top-bar-separator.component';
import {ToolbarComponent} from './top-bar.component';
import {UserComponent} from './user/user.component';
import {ToolbarUserDirective} from './user/user.directive';
import {MatIconModule} from '@angular/material/icon';
import { ActionComponent } from './action/action.component';
@NgModule({
  declarations: [
    ToolbarComponent,
    UserComponent,
    ToolbarActionDirective,
    ToolbarUserDirective,
    ToolbarSeparatorComponent,
    ActionComponent
  ],
  imports: [CommonModule, RouterModule,MatIconModule],
  exports: [
    ToolbarComponent,
    UserComponent,
    ToolbarActionDirective,
    ToolbarUserDirective,
    ToolbarSeparatorComponent,
    ActionComponent
  ],
})
export class ToolbarModule {}
