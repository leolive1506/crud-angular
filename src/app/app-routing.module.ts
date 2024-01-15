import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './components/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pensamento',
    // default prefix
    // url lida esquerda pra direta
    // prefix considere somente localhost:4200 e restante ignroado
    // full falar pra considerar toda url
    pathMatch: 'full'
  },
  {
    path: 'pensamento/criar',
    component: CriarPensamentoComponent
  },
  {
    path: 'pensamento',
    component: ListarPensamentoComponent
  },
  {
    path: 'pensamento/excluir/:id',
    component: ExcluirPensamentoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
