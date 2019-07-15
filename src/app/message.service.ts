import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  constructor() { }

  add(message: string) {
    console.log('------ add message: ' + message);
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}
