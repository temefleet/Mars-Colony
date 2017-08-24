import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegisterComponent } from './components/register/register.component';
import { ReportComponent } from './components/report/report.component';
import { EncountersComponent } from './components/encounters/encounters.component';
import { NotFoundComponent } from './components/notfound/notfound.component';

export const appRoutes: Routes = [
  { path: '', component: WelcomeComponent, data: { state: 'welcome' } },
  { path: 'register', component: RegisterComponent, data: { state: 'register' } },
  { path: 'encounters', component: EncountersComponent, data: { state: 'encounters' } },
  { path: 'report', component: ReportComponent, data: { state: 'report' } },
  { path: '**', component: NotFoundComponent, data: { state: 'notfound' } }
];