import { Component} from "@angular/core";

@Component(
  {
    selector : 'btn-sucefull',
    templateUrl : './btnGithub.component.html',
    styleUrls : ['./btnGithub.component.css']
  }
)

export class BtnSucefull {
  private status : boolean = true ;
  private title : string ;
  private corBtn : string ;


  private titles : { send: string , sent : string } = {
    send : 'Ativo' ,
    sent : 'Desativado'
  };
  private colors : { send : string , sent : string} = {
    send : 'send' ,
    sent : 'sent'
  }

  constructor(){
    this.title =  this.titles.send;
    this.corBtn = this.colors.send ;
  }
  sending() : void{
    if (this.status){
      this.corBtn = this.colors.send ;
      this.title = this.titles.send ;
      this.status = false ;
    }else{
      this.corBtn = this.colors.sent ;
      this.title = this.titles.sent;
      this.status = true ;

    }
  };
}
