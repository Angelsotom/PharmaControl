import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(
    // private authService: AuthService, 
    private router: Router) {}

  register() {
    // Simulación del registro sin llamar a la API
    this.router.navigate(['/home']);
  }
}
