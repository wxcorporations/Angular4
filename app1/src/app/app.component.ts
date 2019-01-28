import { Component } from '@angular/core';
import construct = Reflect.construct;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private data_nascimento : number ;
  private valor : number ;
  private title: string = 'aqui seria minha model';
  private dados: object = {
    nome : 'Fernando',
  };

  constructor(){
    this.valor = setTimeout(
      ()=>{
         this.valor = this.idadeAtual( parseInt( prompt('digite a sua data de nascimento')));
      },
      3000
    )

  }

  public idadeAtual(data : number) : number{
    let ano = new Date().getFullYear();
    return parseInt(ano)  - data ;
  }

}

