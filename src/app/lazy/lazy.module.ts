import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [LazyComponent],
  providers: [
    { provide: 'components', useValue: [LazyComponent], multi: true }
  ],
  entryComponents: [LazyComponent]
})
export class LazyModule { }
