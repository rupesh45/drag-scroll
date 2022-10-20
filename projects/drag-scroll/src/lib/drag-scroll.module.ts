import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragScrollComponent } from './drag-scroll.component';



@NgModule({
  declarations: [
    DragScrollComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DragScrollComponent
  ]
})
export class DragScrollModule { }
