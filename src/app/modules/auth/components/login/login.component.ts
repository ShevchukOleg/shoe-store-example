import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { UserRegData } from '../../interfaces/registrationData';
import { SpesialErrorStateMatcher } from '../../../../helpers/errorStateMatcher';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public matcher = new SpesialErrorStateMatcher();


  constructor(private router: Router) { }

  /**
   * під час ініціалізації класу компоненти створюється реактивна форма з валідаторами
   */
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('',
        [
          Validators.required,
          Validators.pattern(/^(?=.*\d)(?=.*[!@#$%&*'+/=?^_`{|}~-])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%&*'+/=?^_`{|}~-]{8,}$/g)
        ]
      )}
    );
  }
  /**
   * метод декларації активного користувача, що передбачає збереження данних до LocalStorage
   */
  public login() {
    const newUser: UserRegData = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };
    console.log(newUser);
    localStorage.setItem('curentUserEmail', newUser.email);
    localStorage.setItem('curentUserPassword', newUser.password);
    this.router.navigate(['/main/store']);
  }
}
