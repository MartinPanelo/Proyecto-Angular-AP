import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { SidevarComponent } from './componentes/sidevar/sidevar.component';
import { HomeComponent } from './componentes/home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonaComponent } from './componentes/personas/personas.component';
import { ColectivosComponent } from './componentes/colectivos/colectivos.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViajesComponent } from './componentes/viajes/viajes.component';
import { environment } from '../environments/environments';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidevarComponent,
    HomeComponent,
    PersonaComponent,
    ColectivosComponent,
    ViajesComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MatTooltipModule
  ],
  providers: [
    { provide: 'API_URL', useValue: environment.apiUrl },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
