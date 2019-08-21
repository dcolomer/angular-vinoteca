import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/paginas/home/home.component';
import { NotFoundComponent } from './componentes/paginas/not-found/not-found.component';
import {ListaVinosComponent} from './componentes/paginas/carta/lista-vinos/lista-vinos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'carta', component: ListaVinosComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
