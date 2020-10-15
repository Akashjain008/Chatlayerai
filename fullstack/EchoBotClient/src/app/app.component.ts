import { Component, OnInit } from '@angular/core';
import { AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

export class AppComponent implements OnInit {
  title = 'EchoBotClient';
  channel:boolean = false;
  username: string = "";
  newMessage: string = "";
  messages: any = [];
  currentUser: any = {};
  str: any= "";
  isTyping: boolean= false;

  constructor(private appService : AppService){};
  
  ngOnInit() { this.getMessage() }  

  joinChat() {
    let data = {id: this.username};
    this.appService.createChatRoom(data);
    this.channel = true;
    this.currentUser.id = this.username; 
  };

  sendMessage() {
    if(!this.newMessage) {
      return;
    }
    let messageObj = {
        text: this.newMessage,
        id: this.username
    };
    this.messages.push(messageObj);
    this.appService.sendMessage(messageObj);
    this.newMessage = "";
  };

  startTyping() {
    let messageObj = {
      id: this.currentUser.id
    }; 
    this.appService.sendTypingIndicator(messageObj);
    clearTimeout(setTime);
    var setTime = setTimeout(()=> {
      this.isTyping = false;
    },2000);
  };

  getMessage() {
    this.appService.getMessage().subscribe((resp)=> {
      let jsonResp = JSON.parse(JSON.stringify(resp));
      if(jsonResp.typing) {
        this.isTyping = true;
        return;
      } 
      this.isTyping = true;
      clearTimeout(setTimeUp);
      var setTimeUp = setTimeout(()=> {
        this.messages.push(jsonResp);
      },2000);
      clearTimeout(setTime);
      var setTime = setTimeout(()=> {
        this.isTyping = false;
        const element = document.querySelector(".msg_history li:last-child");
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'end' });
      },2000);
    });
  }
};
