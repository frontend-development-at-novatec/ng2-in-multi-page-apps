import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LazyService } from '../lazy.service';

@Component({
  selector: 'app-lazy-two-widget',
  styleUrls: ['./lazy-two.component.css'],
  template: `<div class="lazy-two">
              <div>
                <span>Widget two</span><br/>
                <span class="message">{{message}}</span>
              </div>
            </div>`
})
export class LazyTwoComponent {
  subscription: Subscription;
  message = 'no message yet';

  constructor(private messageService: LazyService) {}

  ngOnInit() {
    this.subscription = this.messageService.messageAnnounced$.subscribe(
      message => {
        this.message = message;
      }
    );
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
