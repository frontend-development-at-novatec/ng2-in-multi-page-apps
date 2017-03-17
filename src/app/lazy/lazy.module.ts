import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [LazyComponent],
  providers: [
    { provide: 'components', useValue: [LazyComponent], multi: true }
  ],
  entryComponents: [LazyComponent]
})
export class LazyModule { }
