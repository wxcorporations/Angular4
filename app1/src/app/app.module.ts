import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBar} from './navBar/navBar.component';  // componente criado
import { Footer } from "./footer/footer.component"; // componente criado
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import {IconBranding} from "./iconBranding/iconBranding.component";
import {BtnSucefull} from "./btnGithub/btnGithub.component";   // componente criado
import { FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavBar,
    Footer,
    ServersComponent,
    ServerComponent,
    IconBranding,
    BtnSucefull
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
