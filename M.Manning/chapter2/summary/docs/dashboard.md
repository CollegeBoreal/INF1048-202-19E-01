# Dashboard

* Créer le composant `Tableau de Bord`

```
$ ng generate component components/dashboard
```

* Éditer le composant principal de l'application `app.component.html`

  - retirer la directive `*ngIf="stocks"` aux paramètres de l'étiquette `<main>`
  
  - rajouter l'étiquette `<app-dashboard>`

```html
  <main class="mdl-layout__content" style="padding: 1.25rem;" >
    <app-dashboard></app-dashboard>
  </main>
```

* Réinitialiser le composant principal de l'application `app.component.ts`

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
```

