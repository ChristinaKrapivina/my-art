import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { ArtistsComponent } from './artists/artists.component';
import { WorksComponent } from './works/works.component';


const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'works/:worksId', component: WorksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
