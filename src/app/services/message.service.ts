import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MessageService {

  constructor() { }

  messagesSubject = new Subject<string>();

  sendMessage(message: string) {
    this.messagesSubject.next(message);
    console.log(message)
  }

  receiveMessage() {
    return this.messagesSubject.asObservable
  }

}