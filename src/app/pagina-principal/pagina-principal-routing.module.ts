import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './pagina-principal.component';

const routes: Routes = [
  {
    path: '',
    component: PaginaPrincipalComponent,

  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: [PaginaPrincipalComponent]
})
export class PaginaPrincipalModule { }



