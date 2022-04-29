import { ApilojaService } from './services/apiloja.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { CadUsuarioComponent } from './components/cad-usuario/cad-usuario.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { AtendimentoComponent } from './components/atendimento/atendimento.component'
import { TopoComponent } from './componentsV/topo/topo.component';
import { FooterComponent } from './componentsV/footer/footer.component';
import { LancamentoComponent } from './components/lancamento/lancamento.component';
import { DetalhesLComponent } from './components/detalhes-l/detalhes-l.component';
import { DetalhesPComponent } from './components/detalhes-p/detalhes-p.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadUsuarioComponent,
    ProdutosComponent,
    AtendimentoComponent,
    TopoComponent,
    FooterComponent,
    LancamentoComponent,
    DetalhesLComponent,
    DetalhesPComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ApilojaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
