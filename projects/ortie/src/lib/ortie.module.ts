import { NgModule } from "@angular/core"
import ButtonComponent from "./components/button/button.component"
import { ToolbarComponent } from "./components/top-bar/top-bar.component"
import { ActionComponent } from "./components/top-bar/action/action.component"
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    ButtonComponent,
    ToolbarComponent,
    ActionComponent

    ],
  imports: [
    MatIconModule
  ],
  exports: [
    ButtonComponent,
    ToolbarComponent,
    ActionComponent
    ]
})
export class MyLibModule { }
