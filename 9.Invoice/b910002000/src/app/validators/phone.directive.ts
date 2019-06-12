import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {PhoneValidator} from './phone.validator';

@Directive({
  selector: '[appPhoneValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneDirective, multi: true }]
})
export class PhoneDirective  implements Validator {
  private validator = PhoneValidator();
  constructor() { }
  validate(control: AbstractControl): { [key: string]: any } {
    return this.validator(control);
  }
}
