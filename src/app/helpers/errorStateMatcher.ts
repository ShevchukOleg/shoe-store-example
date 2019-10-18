import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class SpesialErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    // const passwordCheckControl = form.form.value.passwordCheck;
    // const passwordControl = form.form.value.password;
    // const samePassword = (passwordCheckControl === passwordControl) ? true : false;
    // console.log(samePassword, control.invalid, ((control.invalid  || !samePassword ) && (control.dirty)));
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || isSubmitted));
  }
}
