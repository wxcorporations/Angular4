import { Component } from '@angular/core';
import {randomBytes} from "crypto";

@Component({
  selector : 'app-server',
  templateUrl : './server.component.html',
  styleUrls : ['server.component.css']
})
export class ServerComponent
{
  private dataButton : { title : string , class : string } = {
    title : 'on' ,
    class : 'active'
  }

  private dataServer : { nome : string , id : number } = {
    nome: 'Servidor : nome_servidor',
    id : this.gerarID()
  };

  private gerarID(){
    return Math.floor(Math.random() * 100 ) ;
  }

  private setName( nome : string ) : void {
    this.dataServer.nome = nome ;
  }

}
