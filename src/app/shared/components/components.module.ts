import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChildrenComponent} from './children/children.component';
import {SonComponent} from './son/son.component'

@NgModule({
  declarations: [ChildrenComponent, SonComponent],
  imports: [
    CommonModule
  ],
  exports:[SonComponent]
})
export class ComponentsModule { }
