import { FormGroup } from '@angular/forms';

export function passwordMatchValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    // перевіряє стани інших валідаторів
    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }
    // перевіряє відповідність та встановлює стан валідатору
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
