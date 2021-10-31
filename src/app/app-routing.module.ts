import { MateriaComponent } from './blog/materia/materia.component';
import { AssinaturaComponent } from './assinatura/assinatura.component';
import { FeirasComponent } from './feiras/feiras.component';
import { ContatoComponent } from './contato/contato.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { BlogComponent } from './blog/blog.component';
import { Materia2Component } from './blog/materia2/materia2.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PaginaPrincipalComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'feiras', component: FeirasComponent },
  { path: 'assinatura', component: AssinaturaComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'materia', component: MateriaComponent },
  { path: 'materia2', component: Materia2Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
