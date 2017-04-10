import { Component, Input, ElementRef } from '@angular/core';
import { LazyService } from '../lazy.service';

@Component({
  selector: 'app-lazy-widget',
  styleUrls: ['./lazy.component.css'],
  template: `<div class="lazy">
              <div>
                <span>Widget one</span>
                <input (keyup)="send($event)" [value]="message" />
              </div>
            </div>`
})
export class LazyComponent {

  message: string;

  constructor(private messageService: LazyService, public elementRef: ElementRef) {
    this.message = this.elementRef.nativeElement.getAttribute("data-initial-value");
  }

  send(event: any) {
    this.message = event.target.value;
    this.messageService.announceMessage(this.message);
  }
}
