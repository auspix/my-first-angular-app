import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverCreationStatus: string;
  allowAddServer: boolean = false;
  serverName: string = 'TestServer';
  userName: string;
  isEmpty: boolean = true;
  isServerCreated = false;

  servers = ['Test Serveer','Test Servers'];

  constructor() {
    this.serverCreationStatus = 'Server is not created!';
    this.isEmpty = this.userName==='';
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }

  onCreateServer(){
    this.isServerCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server is created! The server name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }


  resetUserName(){
    this.userName = '';
  }
}


