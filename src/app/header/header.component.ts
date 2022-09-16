import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from '../services/message.service';

export interface IMessage {
  title: string;
  body: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  contactForm: FormGroup;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      title: new FormControl(),
      body: new FormControl()
    })
  }

  sendMessage(message: IMessage) {
    // this.messageService.sendMessage(message);
  }

  submit(contactForm) {
    this.messageService.sendMessage(contactForm)
    console.log(contactForm)
  }
}