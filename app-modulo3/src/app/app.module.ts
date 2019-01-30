import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListaCompraComponent } from './lista-compra/lista-compra.component';
import { ListaReceitaComponent } from './lista-receita/lista-receita.component';
import { DescricaoReceitaComponent } from './descricao-receita/descricao-receita.component';
import { PainelMenuCompraComponent } from './painel-menu-compra/painel-menu-compra.component';
import { SessaoCompraComponent } from './sessao-compra/sessao-compra.component';
import { ReceitaComponent } from './receita/receita.component';
import { SessaoReceitasComponent } from './sessao-receitas/sessao-receitas.component';
import { BtnAddComponent } from './btn-add/btn-add.component';
import { BtnClearComponent } from './btn-clear/btn-clear.component';
import { BtnDeletComponent } from './btn-delet/btn-delet.component';
import { ItemListaComponent } from './item-lista/item-lista.component';

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
