import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { ServicioCalculadora } from './services/servicio.calculadora.service';
import { ComponenteCalculadora } from './app.component';

@NgModule({
  declarations: [
    ComponenteCalculadora,
    ComponenteCalculadora // Add this line
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServicioCalculadora],
  bootstrap: [ComponenteCalculadora]
})
export class AppModule { }
