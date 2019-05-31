# Manage

* Créer le composant `Gestion` (paragraphe `2.8`)

```
$ ng generate component components/manage
```

* Éditer le composant principal de l'application `app.component.html`

  - rajouter l'étiquette `<app-manage>`

```html
  <main class="mdl-layout__content" style="padding: 1.25rem;" >
    <app-manage></app-manage>
  </main>
```

* Éditer le module principal de l'application `app.module.ts`

  - Importer le module `FormsModule` permettant la gestion des formulaires

```typescript
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
```

* Éditer le composant de Gestion `manage.component.ts`

```typescript
  symbols: Array<string>;
  stock: string;

  constructor(private service: StocksService) { }

  ngOnInit() {
    this.symbols = this.service.get();
  }

  add() {
    this.symbols.push(this.stock.toUpperCase());
    this.stock = '';
  }

  remove(symbol) {
    this.symbols = this.service.remove(symbol);
  }
```
