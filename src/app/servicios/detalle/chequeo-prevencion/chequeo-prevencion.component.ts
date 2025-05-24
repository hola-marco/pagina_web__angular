import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chequeo-prevencion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chequeo-prevencion.component.html',
  styleUrl: './chequeo-prevencion.component.scss' // O .css
})
export class ChequeoPrevencionComponent {
  constructor(private router: Router) { }

  goBackToServices() {
    this.router.navigate(['/servicios']); // Navega de vuelta a la lista principal de servicios
  }
}