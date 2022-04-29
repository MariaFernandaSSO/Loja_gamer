import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-p',
  templateUrl: './detalhes-p.component.html',
  styleUrls: ['./detalhes-p.component.css']
})
export class DetalhesPComponent implements OnInit {

  indice : number = 0

  produtoP : any

  produtos = [
    {
      nome: 'Teclado Gamer RGB',
      desc: 'O Teclado Mecânico Gamer Husky Gaming Blizzard, 60%, RGB, Switch Gateron Red, ABNT2, Branco é perfeito para quem precisa de performance e precisão. Prepare-se para muitas horas de batalha intensa em seus gameplays!',
      desconto: '50%',
      precoAntigo: '300,00',
      preco: 'R$ 150,00',
      img: '../../../assets/img/lancamento/teclado1.webp'
    },
    {
      nome: 'Teclado Mecânico Rosa',
      desc: 'O teclado Gamer Legion K300 oferece aos jogadores tudo o que precisam para competir. O layout em tamanho convencional, as teclas programáveis e uma membrana de substituição de 24 teclas com iluminação RGB de 5 zonas, estabelecem uma base sólida de estilo e desempenho. O design compacto e a capacidade de ajuste o tornam o companheiro perfeito para torneios e uso casual. IMAGENS ILUSTRATIVAS',
      desconto: '50%',
      precoAntigo: '200,00',
      preco: 'R$ 100,00',
      img: '../../../assets/img/lancamento/teclado2.jpg'
    },
    {
      nome: 'Fone Gamer Audi 8',
      desc: 'Um audio de alta qualidade com espumas grandes e confortáveis trazem a sensação de imersão total no jogo.O G919 possui drives de 50mm que proporcionam uma experiência sonora incrível.Com ajuste 3D ele se adapta perfeitamente a cabeça do usuário.',
      desconto: '50%',
      precoAntigo: '400,00',
      preco: 'R$ 200,00',
      img: '../../../assets/img/lancamento/fone1.jpg'
    },
    {
      nome: 'Teclado Mecanico Switch',
      desc: 'O Teclado gamer possui função "Scroll Lock" que acende os leds de seu teclados que deixa seu teclado muito mais bonito. Sem contar que seja possível o melhor desempenho na sua jogatina. Com conexão USB compatível com windows 2000, XP, Vista, 7, 8, 10. Os leds são com cores fixas podendo ser desligados e ligados.',
      desconto: '10%',
      precoAntigo: 'R$ 350,00',
      preco: 'R$ 315,00',
      img: 'https://images.kabum.com.br/produtos/fotos/114587/teclado-mecanico-gamer-husky-blizzard-rgb-switch-gateron-red-abnt2-branco-tc-hbl-br_1619467058_gg.jpg'
    },
    {
      nome: 'Teclado Mecanico Switch',
      desc: 'Este teclado OEX é o melhor complemento para fazer todos os tipos de atividades. É confortável e prático ao escrever documentos, navegar e pesquisar na Internet, seja no seu trabalho ou no conforto de casa.',
      desconto: '10%',
      precoAntigo: 'R$ 258,00',
      preco: 'R$ 232,20',
      img: 'https://m.media-amazon.com/images/I/617fOo46ISL._AC_SL1200_.jpg'
    },
    {
      nome: 'Fone Gamer RGB',
      desc: 'Um audio de alta qualidade com espumas grandes e confortáveis trazem a sensação de imersão total no jogo.O G919 possui drives de 50mm que proporcionam uma experiência sonora incrível.Com ajuste 3D ele se adapta perfeitamente a cabeça do usuário.',
      desconto: '40%',
      precoAntigo: 'R$ 150,00',
      preco: 'R$ 90,00',
      img: 'https://m.media-amazon.com/images/I/61sQdAFHGML._AC_SL1400_.jpg'
    },
    {
      nome: 'Fone Gamer RGB',
      desc: 'Um audio de alta qualidade com espumas grandes e confortáveis trazem a sensação de imersão total no jogo.O G919 possui drives de 50mm que proporcionam uma experiência sonora incrível.Com ajuste 3D ele se adapta perfeitamente a cabeça do usuário.',
      desconto: '50%',
      precoAntigo: 'R$ 200,00',
      preco: 'R$ 100,00',
      img: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/g/pgh-p851-rgb1020.jpg'
    }
  ]

  constructor(
    private rota1 : ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.indice = this.rota1.snapshot.params['indice']
    this.produtoP = this.produtos[this.indice]
  }

}
