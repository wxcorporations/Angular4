import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-painel-menu-compra',
  templateUrl: './painel-menu-compra.component.html',
  styleUrls: ['./painel-menu-compra.component.css']
})
export class PainelMenuCompraComponent implements OnInit {
  constructor() {
  }

  private nome: string = "";
  private qtd: string = "";

  @Input()
  public listaItens: any = [];

  private updateNome(event: Event): void {
    this.nome = (<HTMLInputElement>event.target).value;
  }

  private updateQtd(event: Event): void {
    this.qtd = (<HTMLInputElement>event.target).value.toString();
  }

  private addItem() {
    let _nome: string = this.nome,
      _qtd: string = this.qtd.toString(),
      msg: string = _nome + '  ' + _qtd;

    if( this.nome && this.qtd ){
      this.listaItens.push(msg);
      this.clearInput();
    }else{
      console.log(this.listaItens);
    }
  }

  private clearInput() {
    this.nome = '';
    this.qtd = '';
  }


  ngOnInit() {
  }
}


