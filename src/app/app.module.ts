import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ContatoComponent } from './contato/contato.component';
import { BlogComponent } from './blog/blog.component';
import { FeirasComponent } from './feiras/feiras.component';
import { AssinaturaComponent } from './assinatura/assinatura.component';
import { MateriaComponent } from './blog/materia/materia.component';
import { Materia2Component } from './blog/materia2/materia2.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    CabecalhoComponent,
    RodapeComponent,
    QuemSomosComponent,
    ContatoComponent,
    BlogComponent,
    FeirasComponent,
    AssinaturaComponent,
    MateriaComponent,
    Materia2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
