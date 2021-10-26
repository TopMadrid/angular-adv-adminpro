import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';





// Como es para rutas pues CommonModule no es necesario
//Ya que se usa para las directivas ngIf, ngFor
//import { CommonModule } from '@angular/common';


const routes: Routes = [

  // path: '/pages' PagesRouting
  // path: '/auth' AuthRouting
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent}, // Si no es ninguna de las anteriores

];


@NgModule({
  imports: [
   // CommonModule
   RouterModule.forRoot( routes ),
   PagesRoutingModule,
   AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
