import { Component, OnInit } from '@angular/core';
import {connectableObservableDescriptor} from "rxjs/internal/observable/ConnectableObservable";

@Component({
  selector: 'app-lista-receita',
  templateUrl: './lista-receita.component.html',
  styleUrls: ['./lista-receita.component.css']
})
export class ListaReceitaComponent implements OnInit {

  constructor() {}
  private listaReceita : object[] = [];

  private URI : string[] = ["https://cdn.pixabay.com/photo/2016/04/13/07/18/blue-1326154__340.jpg", "https://cdn.pixabay.com/photo/2017/03/10/13/57/cooking-2132874__340.jpg", "https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063__340.jpg", "https://cdn.pixabay.com/photo/2016/02/27/06/43/cherry-tree-1225186__340.jpg", "https://cdn.pixabay.com/photo/2018/01/31/09/57/coffee-3120750__340.jpg", "https://cdn.pixabay.com/photo/2014/12/04/14/46/magnolia-trees-556718__340.jpg", "https://cdn.pixabay.com/photo/2018/04/29/11/54/strawberries-3359755__340.jpg", "https://cdn.pixabay.com/photo/2017/06/21/09/19/spoon-2426623__340.jpg", "https://cdn.pixabay.com/photo/2014/11/13/17/04/heart-529607__340.jpg", "https://cdn.pixabay.com/photo/2017/12/29/16/34/fruit-3048001__340.jpg", "https://cdn.pixabay.com/photo/2017/10/24/18/27/lion-2885618__340.jpg", "https://cdn.pixabay.com/photo/2016/12/13/00/13/rabbit-1903016__340.jpg", "https://cdn.pixabay.com/photo/2014/06/11/17/00/cook-366875__340.jpg", "https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-cone-1274894__340.jpg", "https://cdn.pixabay.com/photo/2018/10/06/11/22/coffee-3727673__340.jpg", "https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999__340.jpg", "https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590__340.jpg", "https://cdn.pixabay.com/photo/2017/08/30/17/12/waffle-heart-2697904__340.jpg", "https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg", "https://cdn.pixabay.com/photo/2018/02/17/08/05/kingfisher-3159334__340.jpg", "https://cdn.pixabay.com/photo/2017/11/25/17/17/sandwich-2977251__340.jpg", "https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153__340.jpg", "https://cdn.pixabay.com/photo/2015/09/09/17/38/basil-932079__340.jpg", "https://cdn.pixabay.com/photo/2016/03/09/09/43/food-1245955__340.jpg", "https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657__340.jpg", "https://cdn.pixabay.com/photo/2015/03/16/19/54/barley-676551__340.jpg", "https://cdn.pixabay.com/photo/2015/06/02/13/58/pink-lemonade-795029__340.jpg", "https://cdn.pixabay.com/photo/2014/08/26/15/28/jam-428094__340.jpg", "https://cdn.pixabay.com/photo/2016/08/23/15/52/fresh-orange-juice-1614822__340.jpg", "https://cdn.pixabay.com/photo/2017/11/23/13/50/pumpkin-soup-2972858__340.jpg", "https://cdn.pixabay.com/photo/2012/06/21/00/48/market-50423__340.jpg", "https://cdn.pixabay.com/photo/2018/05/30/16/23/fruit-3441830__340.jpg", "https://cdn.pixabay.com/photo/2017/05/28/10/23/swan-2350668__340.jpg", "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467__340.jpg", "https://cdn.pixabay.com/photo/2014/04/11/13/26/eat-321671__340.jpg", "https://cdn.pixabay.com/photo/2016/06/29/08/41/wedding-dresses-1486256__340.jpg", "https://cdn.pixabay.com/photo/2017/03/26/11/53/food-platter-2175326__340.jpg", "https://cdn.pixabay.com/photo/2015/04/24/20/58/girl-738303__340.jpg", "https://cdn.pixabay.com/photo/2017/01/16/17/45/pancake-1984716__340.jpg", "https://cdn.pixabay.com/photo/2014/10/30/17/32/boy-509488__340.jpg", "https://cdn.pixabay.com/photo/2016/04/13/22/12/treatment-1327811__340.jpg", "https://cdn.pixabay.com/photo/2014/10/27/22/03/sad-505857__340.jpg", "https://cdn.pixabay.com/photo/2017/03/31/15/41/giraffe-2191662__340.jpg", "https://cdn.pixabay.com/photo/2018/05/26/10/54/strawberries-3431122__340.jpg", "https://cdn.pixabay.com/photo/2017/08/13/00/58/raspberry-2635886__340.jpg", "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665__340.jpg", "https://cdn.pixabay.com/photo/2017/04/21/12/10/cuisine-2248567__340.jpg", "https://cdn.pixabay.com/photo/2016/11/02/16/51/broccoli-1792236__340.jpg", "https://cdn.pixabay.com/photo/2012/02/28/00/49/squirrel-17854__340.jpg", "https://cdn.pixabay.com/photo/2013/05/11/08/28/person-110305__340.jpg", "https://cdn.pixabay.com/photo/2014/08/26/20/08/baby-428395__340.jpg", "https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813__340.jpg", "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846__340.jpg", "https://cdn.pixabay.com/photo/2017/12/10/14/47/piza-3010062__340.jpg", "https://cdn.pixabay.com/photo/2015/03/14/19/45/suit-673697__340.jpg", "https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758__340.jpg", "https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberries-1330459__340.jpg", "https://cdn.pixabay.com/photo/2016/09/18/20/25/candy-1678933__340.jpg", "https://cdn.pixabay.com/photo/2015/02/01/12/31/feet-619399__340.jpg", "https://cdn.pixabay.com/photo/2016/10/07/13/36/tangerines-1721590__340.jpg", "https://cdn.pixabay.com/photo/2017/01/30/13/49/pancakes-2020863__340.jpg", "https://cdn.pixabay.com/photo/2016/03/05/19/02/vegetables-1238252__340.jpg", "https://cdn.pixabay.com/photo/2017/03/31/10/56/waffles-2190961__340.jpg", "https://cdn.pixabay.com/photo/2017/10/02/21/56/garlic-2810491__340.jpg", "https://cdn.pixabay.com/photo/2016/12/15/14/13/girl-1909006__340.jpg", "https://cdn.pixabay.com/photo/2013/07/13/01/22/fruits-155616__340.png", "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg", "https://cdn.pixabay.com/photo/2016/05/24/13/29/olive-oil-1412361__340.jpg", "https://cdn.pixabay.com/photo/2017/11/26/15/16/smiley-2979107__340.jpg", "https://cdn.pixabay.com/photo/2016/12/06/18/27/milk-1887237__340.jpg", "https://cdn.pixabay.com/photo/2014/08/08/20/51/hunger-413685__340.jpg", "https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457__340.jpg", "https://cdn.pixabay.com/photo/2015/04/24/20/59/girl-738306__340.jpg", "https://cdn.pixabay.com/photo/2016/02/17/19/26/tomato-1205699__340.jpg", "https://cdn.pixabay.com/photo/2017/10/25/19/45/arrow-2889040__340.jpg", "https://cdn.pixabay.com/photo/2016/03/05/19/02/salmon-1238248__340.jpg", "https://cdn.pixabay.com/photo/2010/12/06/22/soldiers-1002__340.jpg", "https://cdn.pixabay.com/photo/2018/07/12/02/32/basil-3532424__340.jpg", "https://cdn.pixabay.com/photo/2014/02/07/15/32/parsley-261039__340.jpg", "https://cdn.pixabay.com/photo/2018/03/13/20/08/pistachios-3223610__340.jpg", "https://cdn.pixabay.com/photo/2016/07/24/23/35/blackberries-1539540__340.jpg", "https://cdn.pixabay.com/photo/2014/12/08/09/45/noodles-560657__340.jpg", "https://cdn.pixabay.com/photo/2014/05/18/11/49/mediterranean-346997__340.jpg", "https://cdn.pixabay.com/photo/2016/01/05/13/58/apple-1122537__340.jpg", "https://cdn.pixabay.com/photo/2018/01/04/08/04/people-3060107__340.jpg", "https://cdn.pixabay.com/photo/2016/10/25/12/56/almonds-1768792__340.jpg", "https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305__340.jpg", "https://cdn.pixabay.com/photo/2016/01/19/18/01/food-1150029__340.jpg", "https://cdn.pixabay.com/photo/2017/08/18/19/48/grapes-2656259__340.jpg", "https://cdn.pixabay.com/photo/2018/05/12/12/48/knapweed-3393209__340.jpg", "https://cdn.pixabay.com/photo/2014/07/22/09/59/bread-399286__340.jpg", "https://cdn.pixabay.com/photo/2018/08/16/19/56/wedding-rings-3611277__340.jpg", "https://cdn.pixabay.com/photo/2012/02/28/00/48/animal-17819__340.jpg", "https://cdn.pixabay.com/photo/2016/11/20/18/18/girl-1843477__340.jpg", "https://cdn.pixabay.com/photo/2015/05/20/14/23/cooking-775503__340.jpg", "https://cdn.pixabay.com/photo/2018/09/07/17/50/fruit-3661159__340.jpg", "https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430__340.jpg", "https://cdn.pixabay.com/photo/2015/09/02/12/27/eggs-918437__340.jpg", "https://cdn.pixabay.com/photo/2017/08/23/14/11/kiwi-2673038__340.png", "https://cdn.pixabay.com/photo/2016/04/13/07/15/strawberries-1326148__340.jpg"];

  private getUri(){
    let total = this.URI.length;
    return this.URI[ (Math.floor( Math.random() * total )) ]
  }

  private dataDescricao : object = {};

  private exibirDescricao( data ) : void{
    this.dataDescricao =  data ;
  }

  public addReceita() : void {
    let receita : {
      img : any ,
      title : string ,
      descricao : string
    } = {
      img : this.getUri(),
      title : 'Tacos mexicanos',
      descricao : 'Taco é uma comida típica do México. Por causa da proximidade com os Estados Unidos, há diferenças entre as receitas dos dois países.'
    };

    this.listaReceita.push( receita ) ;
    console.log( this.listaReceita );
  }

  ngOnInit() {
  }

}


