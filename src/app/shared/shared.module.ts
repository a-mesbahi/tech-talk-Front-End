import { TimeConversionPipe } from './pipes/time-conversion.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    TimeConversionPipe
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    TimeConversionPipe
  ]
})
export class SharedModule { }
