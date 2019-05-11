import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DisplaymovieComponent } from './displaymovie/displaymovie.component';
import { IntheatersComponent } from './intheaters/intheaters.component';
import { TopratedComponent } from './toprated/toprated.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { SeriespageComponent } from './seriespage/seriespage.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviecatsectionComponent } from './moviecatsection/moviecatsection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplaymovieComponent,
    IntheatersComponent,
    TopratedComponent,
    ComingsoonComponent,
    FooterComponent,
    CardComponent,
    SeriespageComponent,
    HomePageComponent,
    MoviecatsectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
