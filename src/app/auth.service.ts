import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Esta propiedad almacenará los usuarios registrados en memoria.
  // En una aplicación real, esto interactuaría con una base de datos o un backend.
  private registeredUsers: { [key: string]: string } = {};

  constructor() { }

  /**
   * Registra un nuevo usuario con su contraseña.
   * @param username El nombre de usuario a registrar.
   * @param password La contraseña para el usuario.
   * @returns true si el registro fue exitoso, false si el usuario ya existe.
   */
  registerUser(username: string, password: string): boolean {
    if (this.registeredUsers[username]) {
      // El usuario ya existe, no se puede registrar de nuevo.
      return false;
    }
    this.registeredUsers[username] = password;
    console.log('Usuario registrado:', username);
    // Para depuración, puedes ver todos los usuarios registrados:
    // console.log('Usuarios actuales:', this.registeredUsers);
    return true;
  }

  /**
   * Valida las credenciales de un usuario.
   * @param username El nombre de usuario a validar.
   * @param password La contraseña a validar.
   * @returns true si las credenciales son correctas, false en caso contrario.
   */
  validateUser(username: string, password: string): boolean {
    // Verifica si el usuario existe Y si la contraseña coincide
    return this.registeredUsers[username] === password;
  }
}