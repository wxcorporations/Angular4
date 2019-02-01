import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

  constructor() {  }

  @Input()
  public receita = {
    img : "",
    title : '',
    descricao : ''
  }
  ngOnInit() {
  }



}
