import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet], //d Esto implica standalone: true por defecto si no está explícito
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss' // Nota: styleUrl en singular
})
export class AppComponent {
  title = 'paginaWEb';
}