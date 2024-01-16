import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

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
  favoritos: boolean = false;
  listaFavoritos: Pensamento[] = []
  titulo: string = 'Meu mural'

  constructor(
    private service: PensamentoService,
    private router: Router
  ) { }

  // executar assim qeu componente for carregado
  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe(
      (pensamentos) => this.listaPensamentos = pensamentos
    )
  }

  carregarMaisPensamentos() {
    if (this.haMaisPensamentos) {
      this.service.listar(++this.paginaAtual, this.filtro, this.favoritos).subscribe(listaPensamentos => {
        this.listaPensamentos.push(...listaPensamentos)
        if (this.listaPensamentos.length) {
          this.haMaisPensamentos = false;
        }
      })
    }
  }

  pesquisarPensamentos() {
    this.paginaAtual = 1
    this.haMaisPensamentos = true
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentos => {
        this.listaPensamentos = listaPensamentos
      })
  }

  listarFavoritos() {
    this.titulo = 'Meus favoritos'
    this.favoritos = true;
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentos => {
        this.listaPensamentos = listaPensamentos
        this.listaFavoritos = listaPensamentos
      })
  }

  recarregarComponente() {
    // por padrão roteador reutilza instancia de um componente quando navega pro mesmo componente sem ter navegado pra um componente diferente
    this.favoritos = false
    this.paginaAtual = 1
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    // onSameUrlNavigation => quando estiver navegando na mesma url, acontece tal coisa
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }
}
