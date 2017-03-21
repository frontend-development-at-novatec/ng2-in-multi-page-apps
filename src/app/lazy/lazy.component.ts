import { Component, Input } from '@angular/core';
import { LazyService } from '../lazy.service';

@Component({
  selector: 'app-lazy-widget',
  styleUrls: ['./lazy.component.css'],
  template: `<div class="lazy">
              <div>
                <span>Widget one</span>
                <input (keyup)="send($event)" />
              </div>
            </div>`
})
export class LazyComponent {

  message: string;

  constructor(private messageService: LazyService) {}

  send(event: any) {
    this.message = event.target.value;
    this.messageService.announceMessage(this.message);
  }
}
