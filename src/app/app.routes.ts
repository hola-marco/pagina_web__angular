// En src/app/app.routes.ts (o app-routing.module.ts)
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; // Importa RegisterComponent
import { ServiciosComponent } from './servicios/servicios.component';
import { ChequeoPrevencionComponent } from './servicios/detalle/chequeo-prevencion/chequeo-prevencion.component';
import { DiagnosticoComponent } from './servicios/detalle/diagnostico/diagnostico.component';
import { CirugiaComponent } from './servicios/detalle/cirugia/cirugia.component';
import { UrgenciasComponent } from './servicios/detalle/urgencias/urgencias.component';
import { AsesoramientoNutricionalComponent } from './servicios/detalle/asesoramiento-nutricional/asesoramiento-nutricional.component';
import { OdontologiaComponent } from './servicios/detalle/odontologia/odontologia.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, // Nueva ruta para el registro
  { path: 'servicios', component: ServiciosComponent },
  { path: 'servicios/chequeo', component: ChequeoPrevencionComponent },
  { path: 'servicios/diagnostico', component: DiagnosticoComponent },
  { path: 'servicios/cirugia', component: CirugiaComponent },
  { path: 'servicios/urgencias', component: UrgenciasComponent },
  { path: 'servicios/asesoramiento-nutricional', component: AsesoramientoNutricionalComponent },
  { path: 'servicios/odontologia', component: OdontologiaComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' } // La página de inicio es login
];