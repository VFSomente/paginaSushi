import { Component } from '@angular/core';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CorpoComponent } from './corpo/corpo.component';
import { RodapeComponent } from './rodape/rodape.component';





@Component({
  selector: 'app-home',
  template: `
    <app-cabecalho></app-cabecalho>
    <app-corpo></app-corpo>
    <app-rodape></app-rodape>
  `,
  standalone: true,
  imports: [
  CabecalhoComponent,
  CorpoComponent,
  RodapeComponent 
  ],
})
export class HomeComponent {}
