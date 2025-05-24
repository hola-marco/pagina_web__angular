import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necesario para ngModel
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // <--- Importa el servicio de autenticación

@Component({
  selector: 'app-login',
  standalone: true, // Asegúrate de que esto sea correcto para tu proyecto
  imports: [CommonModule, FormsModule], // Asegúrate de incluir FormsModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // O .css
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) { } // <--- Inyecta AuthService

  onLogin() {
    // Usa el AuthService para validar el usuario
    if (this.authService.validateUser(this.username, this.password)) { // <--- Usa validateUser
      console.log('Login exitoso!');
      this.router.navigate(['/servicios']); // Navega a la página de servicios
    } else {
      alert('Usuario o contraseña incorrectos. Si no tienes cuenta, regístrate.');
      console.log('Intento de login fallido para:', this.username);
    }
  }

  onRegister() {
    this.router.navigate(['/register']); // Navega a la página de registro
  }
}