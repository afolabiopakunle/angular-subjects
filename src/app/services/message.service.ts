import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMessage } from '../header/header.component';

@Injectable()
export class MessageService {

  constructor() { }

  messagesSubject = new Subject<IMessage>();

  sendMessage(message: IMessage) {
    this.messagesSubject.next(message);
  }

  receiveMessage() {
    return this.messagesSubject.asObservable();
  }

}