import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit {

  produtosl = [
    {
      indice: 0,
      nome: 'Teclado Gamer RGB',
      desc: 'Teclado que tem muita luizinha e legal',
      desconto: '50%',
      precoAntigo: '300,00',
      preco: 'R$ 150,00',
      img: '../../../assets/img/lancamento/teclado1.webp'
    },
    {
      indice: 1,
      nome: 'Teclado Mecânico Rosa',
      desc: 'Teclado muito bom pra jogo',
      desconto: '50%',
      precoAntigo: '200,00',
      preco: 'R$ 100,00',
      img: '../../../assets/img/lancamento/teclado2.jpg'
    },
    {
      indice: 2,
      nome: 'Fone Gamer Audi 8',
      desc: 'Fone que funciona dos dois lados',
      desconto: '50%',
      precoAntigo: '400,00',
      preco: 'R$ 200,00',
      img: '../../../assets/img/lancamento/fone1.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
