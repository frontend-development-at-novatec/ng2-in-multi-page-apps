import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS, OpaqueToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyTwoComponent } from './lazy-two.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [LazyTwoComponent],
  providers: [
    // { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: [LazyComponent], multi: true },
    { provide: "components", useValue: [LazyTwoComponent], multi: true }
  ],
  entryComponents: [LazyTwoComponent]
})
export class LazyTwoModule { }
