import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyTwoComponent } from './lazy-two.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LazyTwoComponent],
  providers: [
    { provide: 'components', useValue: [LazyTwoComponent], multi: true }
  ],
  entryComponents: [LazyTwoComponent]
})
export class LazyTwoModule { }
