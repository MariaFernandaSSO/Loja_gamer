import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos = [
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
    },
    {
      indice: 3,
      nome: 'Teclado Mecanico Switch',
      desc: 'Teclado bonito e versatil',
      desconto: '10%',
      precoAntigo: 'R$ 350,00',
      preco: 'R$ 315,00',
      img: 'https://images.kabum.com.br/produtos/fotos/114587/teclado-mecanico-gamer-husky-blizzard-rgb-switch-gateron-red-abnt2-branco-tc-hbl-br_1619467058_gg.jpg'
    },
    {
      indice: 4,
      nome: 'Teclado Mecanico Switch',
      desc: 'Teclado capaz de te fazer feliz :D',
      desconto: '10%',
      precoAntigo: 'R$ 258,00',
      preco: 'R$ 232,20',
      img: 'https://m.media-amazon.com/images/I/617fOo46ISL._AC_SL1200_.jpg'
    },
    {
      indice: 5,
      nome: 'Fone Gamer RGB',
      desc: 'Fone que funciona dos dois lados',
      desconto: '40%',
      precoAntigo: 'R$ 150,00',
      preco: 'R$ 90,00',
      img: 'https://m.media-amazon.com/images/I/61sQdAFHGML._AC_SL1400_.jpg'
    },
    {
      indice: 6,
      nome: 'Fone Gamer RGB',
      desc: 'Fone de luizinha',
      desconto: '50%',
      precoAntigo: 'R$ 200,00',
      preco: 'R$ 100,00',
      img: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/g/pgh-p851-rgb1020.jpg'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
