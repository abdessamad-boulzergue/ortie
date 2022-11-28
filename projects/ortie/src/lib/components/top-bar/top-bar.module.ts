import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TopBarActionDirective} from './action/action.directive';
import {TopBarSeparatorComponent} from './top-bar-separator/top-bar-separator.component';
import {TopBarComponent} from './top-bar.component';
import {UserComponent} from './user/user.component';
import {TopBarUserDirective} from './user/user.directive';
import {MatIconModule} from '@angular/material/icon';
import { ActionComponent } from './action/action.component';
@NgModule({
  declarations: [
    TopBarComponent,
    UserComponent,
    TopBarActionDirective,
    TopBarUserDirective,
    TopBarSeparatorComponent,
    ActionComponent
  ],
  imports: [CommonModule, RouterModule,MatIconModule],
  exports: [
    TopBarComponent,
    UserComponent,
    TopBarActionDirective,
    TopBarUserDirective,
    TopBarSeparatorComponent,
    ActionComponent
  ],
})
export class TopBarModule {}
