import { Component, Input } from '@angular/core';

@Component({
  selector: 'lazy-widget',
  styleUrls: ['./lazy.component.css'],
  template: `<div class="lazy">
              <div style="text-align: center;">
                <div >Widget one</div>
                <input type="text"/>
              </div>
            </div>`
})
export class LazyComponent {

}
