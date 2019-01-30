import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  private serverCreationStatus : string = 'No server was created!';
  private serverName : string = '';
  private desactive : boolean = true;
  private serverCreated : boolean = false;
  private onServer : boolean = true ;
  private listServer : string[] = [];

  onCreateServer()
  {
    let nameServe =` Serve name:  ${this.serverName}`;
    this.listServer.push( nameServe );
    this.serverCreated = true ;
  }
  public updateServer(event: Event) : void
  {
    this.serverName = (<HTMLInputElement>event.target).value;
    this.desactive = this.serverName ? false : true ;
  }
  public getClassServer() : string {
    return this.serverCreated ? 'animateActive' : 'animate' ;
  }

  ngOnInit(): void {
  }

}
