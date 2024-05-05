import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UsersService } from './services/users.service';
import { UserSectionComponent } from './components/user-section/user-section.component';
import { CardsCollectionComponent } from './components/cards-collection/cards-collection.component';
import { UsersSectionComponent } from './components/users-section/users-section.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SideBarComponent,
    UserSectionComponent,
    CardsCollectionComponent,
    UsersSectionComponent,
    SettingsComponent,
    PageNotFoundComponent,
    HeroCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [    UsersService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
