# Property binding
- transmite dados para template (html)
- usando {{  }} chama-se interpolação
- ocorre do componente para template
- sintaxe
```html
<input [value]="variavel.valor" />
<p>{{ variavel.valor }}</p>
```

# Event binding
- associação evento angular
- ocorre do template para componente
```html
<button (click)="funcaoChamada()">Click</button>
```

# Two-way data binding
- Property binding e Event binding a transmissão de dados ocorre somente de uma forma
  - ou do componente para template (property binding)
  - ou do template para componetne (event binding)
- Two-way data binding é uma forma de enviar e receber dados simultaneamente 
  - permitindo a atualização em tempo real do dado na tela
```ts
// app module atualizar import
imports: [
    FormsModule
],

```
```html
<input [(ngModel)]="pensamento.conteudo" />
```

# Router
```html
// espaço reservado que angular vai preencher automaticamente
<router-outlet></router-outlet>
```
- Configurar rotas -> app-routing.module.ts
```ts
const routes: Routes = [
  {
    path: '',
    redirectTo: 'pensamento',
    // default prefix
    // url lida esquerda pra direta
    // prefix considere somente localhost:4200 e restante ignroado
    // full falar pra considerar toda url
    pathMatch: 'full'
  },
  {
    path: 'pensamento/criar',
    component: CriarPensamentoComponent
  },
  {
    path: 'pensamento',
    component: ListarPensamentoComponent
  },
];
```

# Comunicação entre componentes
- informaar qeu componente filho vai receber valor de componente pai
```ts
@Input() pensamento = {}
```

# Service
- contem toda logica e comunicação com servidor

## Injectable
- classe injetavel 
  - utilizada em outros componentes / classes por injeção de depencia

# ngOnInit()
- executar algo assimq eu componente for carregado

# Observables
- Observable -> Observer
  - Observer fica observando o observable até receber uma notificação
  - funciona de forma semelhante a Promise
    - so que podem emitir dados continuos (várias vezes durante a existência)
      - vem da biblioteca RXJS, usada pelo angular
- É o Retorno de um HttCliente
  - para informar que tem interesse nos dados é preciso usar o metodo subscribe 
    - semalhante a se inscrever em um canal no youtube se quiser receber as notificações, informando que tem interesse nos dados assim que houver alguma mudança
```ts
ngOnInit(): void {
  this.service.listar().subscribe(
    (pensamentos) => this.listaPensamentos = pensamentos
  )
}
```
