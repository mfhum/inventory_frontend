import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { Auth } from '../auth';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  isLoading: Boolean = false;
  errorMessage: string = null;

  constructor(
    private authservice: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      password: new FormControl('', [Validators.required])
    });
  }

  login() {
    this.isLoading = true;
    const auth: Auth = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    };

    if (auth.username != null && auth.password != null) {
      this.authservice.login(auth).subscribe(
        data => {
          this.authservice.setToken(data['token']);
          this.router.navigate(['/']);
        },
        error => {
          this.isLoading = false;
          if (error.status === 0) {
            console.log('error');
          } else {
            this.errorMessage = 'Userid oder Passwort ist falsch!';
          }
        }
      );
    }
  }
}
