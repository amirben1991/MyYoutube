import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../models/auth-service.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html'
})
export class AuthPageComponent {
  isLogin = true;
  username = '';
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  toggleMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit() {
    if (this.isLogin) {
      this.authService.login(this.username, this.password);
    } else {
      this.authService.register(this.username, this.email, this.password);
    }
    this.router.navigate(['/search']);
  }
}
