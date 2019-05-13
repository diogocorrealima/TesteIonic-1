import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ThemeService } from 'src/theme/theme.service';

const themes = {
  night: {
    primary: '#f5f5f1',
    secondary: '#f5f5f1',
    tertiary: '#f5f5f1',
    medium: '#f5f5f1',
    dark: '#f5f5f1',
    light: '#221F1F'
  },
};

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  userForm: FormGroup;
  private loginError: Boolean = false;
  logoPath: String = 'assets/icon.png';
  constructor(private accountService: AccountService,
    private formBuilder: FormBuilder,
    private router: Router, private theme: ThemeService) { }

  ngOnInit() {
    // this.changeTheme('night');
    this.userForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  changeTheme(name) {
    this.theme.setTheme(themes[name]);
  }
  login() {
    this.accountService.login(this.userForm.value)
      .then(result => {
        this.loginError = result != null;
        this.router.navigate(['/tabs/tab-home']);
      })
      .catch(error => {
        this.loginError = true;
        this.router.navigate(['/']);
      });

  }
  loginWithFingerprint() {
    this.accountService.loginWithFingerprint(this.userForm.value);
  }
}
