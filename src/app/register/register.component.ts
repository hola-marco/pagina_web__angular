import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

// Importaciones de Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true, // Asegúrate de que esto sea 'true' si tu proyecto es standalone
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss' // O .css
})
export class RegisterComponent {
  newUsername: string = '';
  newPassword: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  onRegisterSubmit() {
    if (this.newUsername && this.newPassword) {
      if (this.authService.registerUser(this.newUsername, this.newPassword)) {
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        this.router.navigate(['/login']);
      } else {
        alert('El usuario ya existe. Por favor, elige otro.');
      }
    } else {
      alert('Por favor, ingresa un usuario y una contraseña.');
    }
  }

  goToLogin() {
      this.router.navigate(['/login']);
  }
}