import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListaCompraComponent } from './lista-compra/lista-compra.component';
import { ListaReceitaComponent } from './sessao-receitas/lista-receita/lista-receita.component';
import { DescricaoReceitaComponent } from './sessao-receitas/descricao-receita/descricao-receita.component';
import { PainelMenuCompraComponent } from './sessao-compra/painel-menu-compra/painel-menu-compra.component';
import { SessaoCompraComponent } from './sessao-compra/sessao-compra.component';
import { ReceitaComponent } from './sessao-receitas/lista-receita/receita/receita.component';
import { SessaoReceitasComponent } from './sessao-receitas/sessao-receitas.component';
import { BtnAddComponent } from './btns/btn-add/btn-add.component';
import { BtnClearComponent } from './btns/btn-clear/btn-clear.component';
import { BtnDeletComponent } from './btns/btn-delet/btn-delet.component';
import { ItemListaComponent } from './sessao-compra/item-lista/item-lista.component';
import { FooterComponent} from "./footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListaCompraComponent,
    ListaReceitaComponent,
    DescricaoReceitaComponent,
    PainelMenuCompraComponent,
    SessaoCompraComponent,
    ReceitaComponent,
    SessaoReceitasComponent,
    BtnAddComponent,
    BtnClearComponent,
    BtnDeletComponent,
    ItemListaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
