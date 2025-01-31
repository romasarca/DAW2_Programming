import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { AppEncaminamentModule } from './app-encaminament.module';

import { M01_SalutacioComponent } from './20231026/m01-salutacio.component'; // I import a component.
import { M02_SumaComponent } from './20231026/m02-suma.component';
import { ParellSenar } from './20231103/parell_senar.component';
import { M03_IteradorComponent } from './20231103/m03-iterador.component';
import { M03_mitja_iterador_component } from './20231109/m03-mitja-iterador.component';
import { M04_PomodoroComponent } from './20231116/m04-pomodoro.component';

// Exam.
import { examen_esportista_component } from './20231123_EXAMEN/examen-components';

import {
  M05_BindingsComponent,
  M05_CompteEnrera_Component,
} from './20231423/m05-bindings.component';
import { M06_DirectivesComponent } from './20231423/m06-directives.component';
import { M07_DirectivaPersonalizada } from './20231423/m07-directiva-personalitzada.directive';
import { M07_DirectivaPersonalitzadaComponent } from './20231423/m07-directiva-personalitzada.component';

import { M08_PipesComponent } from './20231423/m08-pipes.component';
import { M09_OrdenarPerPipe } from './20231423/m09-ordenar-per.pipe';
import { M09_PipePersonalizadaComponent } from './20231423/m09-pipe-personalitzada.component';
import { repas_iterador_component } from './20231121_review/repas-iterador-components';

import { Examen } from './20240115_CorrecioExamen/examen.component';
import { M10_AnimacioComponent } from './20240118/m10-animacio.component';
import { M10_AnimacionsComponent } from './20240118/m10-animacions.component';
import { M11_EncaminamentComponent } from './20240118/m11-encaminament.component';

import { Exercici1Component } from './20240215_EXAMEN/Exercici1';
import { Exercici1Directiva } from './20240215_EXAMEN/Exercici1-DirectivaCaracter';
import { Exercici2Component } from './20240215_EXAMEN/Exercici2';
import { Exercici2_OrdenarNotaPipe } from './20240215_EXAMEN/Exercici2-Pipe';
import { ExerciciExamen3Component } from './20240215_EXAMEN/Exercici3'; 
import { Exercici3Routing } from './20240215_EXAMEN/EXercici3-routing';

@NgModule({
  declarations: [
    M01_SalutacioComponent,
    M02_SumaComponent,
    ParellSenar,
    M03_IteradorComponent,
    M03_mitja_iterador_component,
    M04_PomodoroComponent,
    repas_iterador_component,
    examen_esportista_component,
    // M05_BindingsComponent is dependant of M05_CompteEnrera_Component.
    M05_BindingsComponent,
    M05_CompteEnrera_Component,

    M06_DirectivesComponent,

    M07_DirectivaPersonalizada,
    M07_DirectivaPersonalitzadaComponent,

    M08_PipesComponent,

    M09_OrdenarPerPipe,
    M09_PipePersonalizadaComponent,

    Examen,

    M10_AnimacioComponent,
    M10_AnimacionsComponent,
    M11_EncaminamentComponent,

    Exercici1Component,
    Exercici1Directiva,
    Exercici2Component,
    Exercici2_OrdenarNotaPipe,
    ExerciciExamen3Component,
    Exercici3Routing,
  ], // Here I must say the components I want to be able to use.
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatDividerModule,
    MatIconModule,

    AppEncaminamentModule,
  ],
  providers: [],
  bootstrap: [Exercici3Routing], // This is the component I'm using.
})
export class AppModule {}
