import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

  constructor() { }
  public receita : {
    img : string ,
    title : string ,
    descricao : string
  } = {
    img : 'https://media-cdn.tripadvisor.com/media/photo-s/08/d1/92/e5/butantan-food-park.jpg',
    title : 'Tacos mexicanos',
    descricao : 'Taco é uma comida típica do México. Por causa da proximidade com os Estados Unidos, há diferenças entre as receitas dos dois países.'
  }
  ngOnInit() {
  }

}
