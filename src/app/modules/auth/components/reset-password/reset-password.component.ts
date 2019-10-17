import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../../../../helpers/passwordMatchValidator';
// import { SpesialErrorStateMatcher } from '../../../../helpers/errorStateMatcher';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public newPasswordForm: FormGroup;
  // public matcher = new SpesialErrorStateMatcher();


  constructor(private formBuilder: FormBuilder, private router: Router) { }

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

  get f() { return this.newPasswordForm.controls; }

  public resetPassword() {

    if (this.newPasswordForm.invalid) {
      console.log('Form invalid!');
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
