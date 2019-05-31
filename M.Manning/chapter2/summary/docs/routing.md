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
