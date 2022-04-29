import { LoginComponent } from './components/login/login.component';
import { DetalhesPComponent } from './components/detalhes-p/detalhes-p.component';
import { DetalhesLComponent } from './components/detalhes-l/detalhes-l.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtendimentoComponent } from './components/atendimento/atendimento.component';
import { CadUsuarioComponent } from './components/cad-usuario/cad-usuario.component';
import { HomeComponent } from './components/home/home.component';
import { ProdutosComponent } from './components/produtos/produtos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'CadUsuario', component: CadUsuarioComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Produtos', component: ProdutosComponent},
  {path: 'Atendimento', component: AtendimentoComponent},
  {path: 'detalhes/:indice', component: DetalhesLComponent},
  {path: 'detalhesp/:indice', component: DetalhesPComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
