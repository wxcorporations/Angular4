import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-descricao-receita',
  templateUrl: './descricao-receita.component.html',
  styleUrls: ['./descricao-receita.component.css']
})
export class DescricaoReceitaComponent implements OnInit {

  @Input() dadosReceita = {
    title : '',
    descricao : '',
    img : ''
  }

  constructor() { }

  ngOnInit() {
  }

}
