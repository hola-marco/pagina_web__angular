import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para usar *ngFor en el HTML
import { Router } from '@angular/router'; // Necesario para la navegación entre rutas

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule para las directivas estructurales de Angular
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss' // O .css si usas CSS puro
})
export class ServiciosComponent {
  // Array de objetos, cada uno representa un servicio con su nombre, imagen y ruta de navegación.
  services = [
    // Asegúrate de que las rutas de las imágenes aquí coincidan con los nombres de tus archivos en src/assets/
    // Y que las rutas de navegación (ej. '/servicios/chequeo') coincidan con las que definirás en app.routes.ts
    { name: 'Chequeo y Prevención', image: 'prevencion.jpg', route: '/servicios/chequeo' },
    { name: 'Diagnóstico', image: 'assets/diagnostico.jpg', route: '/servicios/diagnostico' },
    { name: 'Cirugía', image: 'assets/cirugia.jpg', route: '/servicios/cirugia' },
    { name: 'Urgencias', image: 'assets/urgencias.jpg', route: '/servicios/urgencias' },
    { name: 'Asesoramiento Nutricional', image: 'assets/asesoramiento.jpg', route: '/servicios/asesoramiento-nutricional' },
    { name: 'Odontología', image: 'assets/odontologia.jpg', route: '/servicios/odontologia' }
  ];

  constructor(private router: Router) { } // Inyecta el servicio Router para la navegación

  // Función que se llama cuando se hace clic en una tarjeta de servicio.
  // Utiliza el Router para navegar a la ruta específica del servicio.
  goToServiceDetail(route: string) {
    this.router.navigate([route]);
  }

  // Función para el botón "Volver al Login" (opcional)
  goToLogin() {
    this.router.navigate(['/login']);
  }
}