# Form Validation

##### Create a Phone `Directive`

```
$ ng generate directive validators/phone
```

##### Create a Phone Validator

* Create a `TypeScript` file `src/app/validators/phone.validator.ts` and add the below snippet:

```typescript
import {AbstractControl, ValidatorFn} from '@angular/forms';

const expression = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;

export function PhoneValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const valid = expression.test(control.value) && control.value.length < 14;
    return valid ? null : {phone: true};
  };
}
```


```typescript
  selector: '[appPhoneValidation]',
```

```typescript
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneDirective, multi: true }]
```

```typescript
  private validator = PhoneValidator();
```

```typescript
   implements Validator
```

```typescript
  validate(control: AbstractControl): { [key: string]: any } {
    return this.validator(control);
  }
```

* Final Result

```typescript
import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {PhoneValidator} from './phone.validator';

@Directive({
  selector: '[appPhoneValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneDirective, multi: true }]
})
export class PhoneDirective implements Validator {

  private validator = PhoneValidator();

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } {
    return this.validator(control);
  }

}
```



##### Edit `customers.component.html`

```html
<button mat-fab class="mat-fab-bottom-right fixed mat-accent mat-fab" routerLink="/customers/create">
  <mat-icon>add</mat-icon>
</button>
```
