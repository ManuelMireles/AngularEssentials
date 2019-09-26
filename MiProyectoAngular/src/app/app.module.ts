import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorld } from './miprimercomponente/primer.component';
import { HolamundoComponent } from './holamundo/holamundo.component'; //Ruta del archvio typescript y la clase que se va a utilizar

@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    HolamundoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
