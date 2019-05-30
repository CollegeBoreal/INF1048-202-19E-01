# Créer le composant `summary`

```
$ ng generate component components/summary
```

* Mettre à jour son `template`avec le code ci-dessous, (i.e. fichier `summary.component.html`)

```html
<div class="mdl-card stock-card mdl-shadow--2dp" 
     [ngClass]="{increase: isPositive(), decrease: isNegative()}" style="width: 100%;">
  <span>
    <div class="mdl-card__title">
      <h4 style="color: #fff; margin: 0">
        {{stock?.symbol?.toUpperCase()}}<br />
        {{stock?.lastTradePriceOnly | currency:'USD':'symbol':'.2'}}<br />
        {{stock?.change | currency:'USD':'symbol':'.2'}} ({{stock?.changeInPercent | percent:'.2'}})
      </h4>
    </div>
  </span>
</div>
```
- Ajouter une parametre d'entrée de composant `@Input` appellé `stock`
- Ajouter les fonctions `isNegative()` et `isPositive()` au code de la classe `SummaryComponent`

```typescript
  @Input() stock: any;

  isNegative() {
    if (!this.stock || this.stock.change >= 0) {
      return false;
    }

    return true;
  }

  isPositive() {
    if (!this.stock || this.stock.change <= 0) {
      return false;
    }

    return true;
  }
```
