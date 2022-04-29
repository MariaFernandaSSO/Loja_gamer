import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-l',
  templateUrl: './detalhes-l.component.html',
  styleUrls: ['./detalhes-l.component.css']
})
export class DetalhesLComponent implements OnInit {

  indice : number = 0

  produtol: any

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
      }
  ]
  constructor(
    private rota : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.indice = this.rota.snapshot.params['indice']
    this.produtol = this.produtos[this.indice]
  }

}
