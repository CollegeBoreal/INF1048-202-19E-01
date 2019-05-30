# Stocks (Chapter 2)

* Créer un nouveau projet avec votre :id: (i.e. b30000000 )

 ``` 
 $ ng new <ID> && cd <ID>
 ```
 
 * Éditer le fichier `index.html` et rajouter le code ci-dessous à l'étiquette `<head>`
 
 ```html 
  <link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.1/material.indigo-orange.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
 ```
 
 * Éditer le fichier `styles.css` et rajouter le code ci-dessous 
 
 ```css
 body {
    background: #f3f3f3
 }
 ```
 
 * Éditer le fichier `app.component.html` et rajouter le code suivant
 
 ```html 
 <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">Stock Tracker</span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <a class="mdl-navigation__link" >Dashboard</a>
        <a class="mdl-navigation__link" >Manage</a>        
      </nav>
    </div>
  </header>
  <main class="mdl-layout__content" style="padding: 1.25rem;">
   
  </main>
</div>
``` 

## Service

* Rajouter le `service` appellé `Stocks` avec la commande suivante

 ``` 
 $ ng generate service services/stocks
 ```
* Éditer le fichier `stocks.service.ts`

- Ajouter des variables locales

```typescript
const stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
const service: string = 'https://angular2-in-action-api.herokuapp.com';
```

- Modifier son constructeur

```typescript
   constructor(private http: HttpClient) {}
``` 

- Ajouter des fonctions

```typescript
  get() {
    return stocks;
  }

  add(stock) {
    stocks.push(stock);
    return this.get();
  }

  remove(stock) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols) {
    if (symbols) {
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }

``` 

