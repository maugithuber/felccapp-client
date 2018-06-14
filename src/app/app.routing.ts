import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
// import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PolicemenComponent } from './components/policemen/policemen.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { CrimesComponent } from './components/crimes/crimes.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
// import { UserEditComponent } from './components/user-edit/user-edit.component';

// import { UserGuard } from './services/user.guard';  // para proteger las url

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'policemen',component:PolicemenComponent},
    {path: 'statistics',component:StatisticsComponent},
    {path: 'crimes',component:CrimesComponent},
    {path: 'politicas',component:PrivacyComponent},
  
    {path:'**', component: HomeComponent}, //cuando escribimos algo q no existe(error 404)
  
];

export const appRoutingProviders:any[] = []; //
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);