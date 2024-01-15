import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute // fornece informações sobre as rotas
  ) { }

  ngOnInit(): void {
    // snapshot faz uma fotografia no momento que a rota foi acessada
    // paramMap traz mapa com informações obrigatorias e opcionais do pensamento
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(id!).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this.service.exculir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/pensamento'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/pensamento'])
  }
}
