import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LogoComponent } from './top-bar/logo/logo.component';
import { NavigationComponent } from './top-bar/navigation/navigation.component';
import { NavItemComponent } from './top-bar/navigation/nav-item/nav-item.component';
import { IntroComponent } from './intro/intro.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistComponent } from './artists/artist/artist.component';
import { WorksComponent } from './works/works.component';
import { StreamsComponent } from './streams/streams.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LogoComponent,
    NavigationComponent,
    NavItemComponent,
    IntroComponent,
    ArtistsComponent,
    ArtistComponent,
    WorksComponent,
    StreamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
