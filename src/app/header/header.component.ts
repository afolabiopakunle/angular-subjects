import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  sendMessage(text) {
    this.messageService.sendMessage(text)
  }

}