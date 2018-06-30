import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapsAPIWrapper} from '@agm/core';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { PolicemenComponent } from './components/policemen/policemen.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { CrimesComponent } from './components/crimes/crimes.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

import { UserService } from './services/user.service';
import { UserGuard } from './services/user.guard';  
import { MarkersService } from './markers.service';
import { AlertsService } from './services/alert.service';

import { ChartsModule } from 'ng2-charts';
import { LineaComponent } from './components/linea/linea.component';
import { BarraComponent } from './components/barra/barra.component';
import { DonaComponent } from './components/dona/dona.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PolicemenComponent,
    StatisticsComponent,
    CrimesComponent,
    PrivacyComponent,
    LineaComponent,
    BarraComponent,
    DonaComponent
  ],
  imports: [
    routing,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDCwUU-Pks7sBgQ2RKzRqd2JwSPnfXkjJU'
    })
  ],
  providers: [
    appRoutingProviders,
    UserService,
    UserGuard,
    MarkersService,
    GoogleMapsAPIWrapper,
    AlertsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
