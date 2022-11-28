import { NgModule } from "@angular/core"
import ButtonComponent from "./components/button/button.component"
import { TopBarComponent } from "./components/top-bar/top-bar.component"
import { ActionComponent } from "./components/top-bar/action/action.component"
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    ButtonComponent,
    TopBarComponent,
    ActionComponent

    ],
  imports: [
    MatIconModule
  ],
  exports: [
    ButtonComponent,
    TopBarComponent,
    ActionComponent
    ]
})
export class MyLibModule { }
