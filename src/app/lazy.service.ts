import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LazyService {
  // Observable string sources
  private messageSource = new Subject<string>();
  // Observable string streams
  messageAnnounced$ = this.messageSource.asObservable();
  // Service message commands
  announceMessage(message: string) {
    this.messageSource.next(message);
  }
}
