import { Component } from '@angular/core';

@Component({
  selector : 'app-server',
  templateUrl : './server.component.html',
  styleUrls : ['server.component.css']
})
export class ServerComponent
{
  private serverCreationStatus : string = 'No server was created!';
  private serverName : string = '';
  private desactive : boolean = true;
  private serverCreated : boolean = false;

  onCreateServer()
  {
    this.serverCreationStatus =` Serve name:  ${this.serverName}`;
    this.serverCreated = true ;
  }
  public updateServer(event: Event) : void
  {
    this.serverName = (<HTMLInputElement>event.target).value;
    this.desactive = this.serverName ? false : true ;
  }
}
