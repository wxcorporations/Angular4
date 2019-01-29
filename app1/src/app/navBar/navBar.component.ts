import { Component } from '@angular/core';

@Component(
  {
    selector : 'nav-bar',
    templateUrl : './navBar.component.html',
    styleUrls : ['./navBar.component.css']
  }
)
export class NavBar {
  private links : { perfil : string , contato : string , git : string } =
    {
      perfil : 'http://jackoest.com/',
      contato : 'http://jackoest.com/#Contatos',
      git : 'https://github.com/wxcorporations'
    }
}
