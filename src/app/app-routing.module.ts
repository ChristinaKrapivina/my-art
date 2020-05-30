import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { ArtistsComponent } from './artists/artists.component';


const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: '#artists', component: ArtistsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
