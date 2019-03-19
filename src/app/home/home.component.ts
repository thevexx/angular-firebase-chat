import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  messages;

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.messages = this.apiService.getMessages();
  }

  loginBtn() {
    this.apiService.login();
  }

  logoutBtn() {
    this.apiService.logout();
  }

  sendMessage(message) {
    this.apiService.sendMessage(message);
  }

  fromTime(time) {
    return moment(time).fromNow();
  }

}
