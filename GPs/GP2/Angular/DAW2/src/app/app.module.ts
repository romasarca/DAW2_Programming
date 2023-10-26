import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { M01_SalutacioComponent } from './m01-salutacio.component'; // I import a component.
import { M02_SumaComponent } from './m02-suma.component';

@NgModule({
  declarations: [M01_SalutacioComponent, M02_SumaComponent], // Here I must say the components I want to be able to use.
  imports: [BrowserModule],
  providers: [],
  bootstrap: [M02_SumaComponent], // This is the component I'm using.
})
export class AppModule {}
