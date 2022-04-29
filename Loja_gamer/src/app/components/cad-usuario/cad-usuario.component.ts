import { ApilojaService } from 'src/app/services/apiloja.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrls: ['./cad-usuario.component.css']
})
export class CadUsuarioComponent implements OnInit {

  usuario = ''
  RG = ''
  email = ''
  senha = ''


  constructor(
    private lServ : ApilojaService
  ) { }

  ngOnInit(): void {
  }

  cadastrar(){
    let c = {
      usuario : this.usuario,
      RG : this.RG,
      email : this.email,
      senha : this.senha
    }

    this.lServ.cadastrar(c).subscribe(
      (dados) => {
        console.log(dados)
      },
      (erro) => {
        console.error(erro)
      }
    );
  }

}
