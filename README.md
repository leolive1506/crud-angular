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
