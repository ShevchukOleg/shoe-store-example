import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../../../../helpers/passwordMatchValidator';



@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public newPasswordForm: FormGroup;



  constructor(private formBuilder: FormBuilder, private router: Router) { }
  /**
   * під час ініціалізації класу компоненти створюється реактивна форма з валідаторами
   */
  ngOnInit() {

    this.newPasswordForm = this.formBuilder.group({
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[!@#$%&*'+/=?^_`{|}~-])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%&*'+/=?^_`{|}~-]{8,}$/g)
      ]],
      passwordCheck: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[!@#$%&*'+/=?^_`{|}~-])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%&*'+/=?^_`{|}~-]{8,}$/g)
      ]]
    }, {
      validator: passwordMatchValidator('password', 'passwordCheck')
    });
  }

  /**
   * допоміжний метод для спрощення финтаксису шаблону
   */
  get f() { return this.newPasswordForm.controls; }

  /**
   * -метод скидання паролю
   */
  public resetPassword() {

    if (this.newPasswordForm.invalid) {
      console.log('Form invalid!');
      alert('Form is invalid!');
      return;
    }
    const formFirstFild: string = this.newPasswordForm.get('password').value;
    const formSecondFild: string = this.newPasswordForm.get('passwordCheck').value;

    if (formFirstFild === formSecondFild) {
      localStorage.removeItem('curentUserPassword');
      localStorage.setItem('curentUserPassword', formFirstFild);
      this.newPasswordForm.reset();
      this.router.navigate(['/auth/login']);
    } else {
      this.newPasswordForm.reset();
    }
  }
}
