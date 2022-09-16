import { Component, OnInit } from '@angular/core';
import { IMessage } from '../header/header.component';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  messages: IMessage[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.receiveMessage().subscribe((data: IMessage) => {
      this.messages.push(data)
    })
  }

}