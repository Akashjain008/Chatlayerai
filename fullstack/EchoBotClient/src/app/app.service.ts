import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private socket: Socket) { }

  createChatRoom(data: object) {
    this.socket.emit('join', data);
  }

  sendMessage(data: object) {
    this.socket.emit("new_message", data);
  }

  getMessage() {
    return this.socket
    .fromEvent("receive_message")
    .pipe(map((data)=> data));
  }

  sendTypingIndicator(data: object) {
    this.socket.emit("typing", data);
  }
}
