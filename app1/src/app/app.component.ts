import { Component } from '@angular/core';
import construct = Reflect.construct;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private dados: { nome : string , idade : number } = {
    nome : 'Fernando',
    idade : 29
  };
}

