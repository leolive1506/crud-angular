import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';
// classe injetavel (utilizada em outros componentes / classes por injeção de depencia)
@Injectable({
  // visivel / injetavel pra todo app
  providedIn: 'root'
})

export class PensamentoService {
  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:3000/pensamentos'

  listar(pagina: number, filtro: string): Observable<Pensamento[]> {
    // `${this.API}?_page=${pagina}&_limit=${itensPorPagina}`
    const itensPorPagina = 2
    let params = new HttpParams() // inclui parametros serializados
      .set("_page", pagina) // substituir valor
      .set("_limit", itensPorPagina)

    if (filtro.trim().length > 2) {
      params = params.set("q", filtro);
    }

    return this.http.get<Pensamento[]>(this.API, { params })
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  exculir(id: string|number): Observable<Pensamento>  {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(id: string|number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url);
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento);
  }

}
