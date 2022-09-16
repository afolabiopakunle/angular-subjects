import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  text: string;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.receiveMessage().subscribe((data) => {
      this.text = data;
    })
  }

}