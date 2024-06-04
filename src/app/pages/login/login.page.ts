import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router) {}

  login() {
    // Aquí puedes añadir lógica de autenticación
    if (this.usuario === 'admin' && this.contrasena === 'admin') {
      this.router.navigate(['/home']);
    } else {
      // Mostrar mensaje de error
      alert('Credenciales incorrectas');
    }
  }

  registrarse() {
    // Redirigir a la página de registro
    // Cambia '/registro' por la ruta correcta si es diferente
    this.router.navigate(['/register']);
  }
}
