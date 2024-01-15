import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = []
  paginaAtual: number = 1
  haMaisPensamentos: boolean = true;
  filtro: string = ''

  constructor(private service: PensamentoService) { }

  // executar assim qeu componente for carregado
  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro).subscribe(
      (pensamentos) => this.listaPensamentos = pensamentos
    )
  }

  carregarMaisPensamentos() {
    if (this.haMaisPensamentos) {
      this.service.listar(++this.paginaAtual, this.filtro).subscribe(listaPensamentos => {
        this.listaPensamentos.push(...listaPensamentos)
        if (this.listaPensamentos.length) {
          this.haMaisPensamentos = false;
        }
      })
    }
  }

  pesquisarPensamentos() {
    console.log('oi')
    this.paginaAtual = 1
    this.haMaisPensamentos = true
    this.service.listar(this.paginaAtual, this.filtro)
      .subscribe(listaPensamentos => {
        this.listaPensamentos = listaPensamentos
      })
  }
}
