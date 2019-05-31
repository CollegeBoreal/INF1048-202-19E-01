# Routing

* Créer le module de `routage` (paragraphe `2.9`)

   - créer le fichier `src/app/app-routing.module.ts` avec le contenu suivant

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```




# Notes:

Vous pouvez créer le module de routage avec Angular/CLI

:warning: Assurez vous d'utiliser `git` pour récupérer le fichier `app.module.ts` car il sera écraser

```
$ ng generate module app --routing --flat --force
```

Pour récuperer le fichier écrasé par la commande `--force`

```
$ git checkout src/app/app.module.ts
```
