import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      title: new FormControl('', [Validators.required, this.noWhitespaceValidator]),
      body: new FormControl('', [Validators.required, this.noWhitespaceValidator])
    })
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}

  submit(contactForm) {
    this.messageService.sendMessage(contactForm)
    this.contactForm.reset()
  }
}