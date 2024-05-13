import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsCollectionComponent } from './users/components/cards-collection/cards-collection.component';
import { CollectionBarCardComponent } from './users/components/collection-bar-card/collection-bar-card.component';
import { LocalUserSectionComponent } from './users/components/local-user-section/local-user-section.component';
import { LoginComponent } from './users/components/login/login.component';
import { SettingsComponent } from './users/components/settings/settings.component';
import { SignupComponent } from './users/components/signup/signup.component';
import { UserSectionComponent } from './users/components/user-section/user-section.component';
import { UsersSectionComponent } from './users/components/users-section/users-section.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    CardsCollectionComponent,
    CollectionBarCardComponent,
    LocalUserSectionComponent,
    LoginComponent,
    SettingsComponent,
    SignupComponent,
    UserSectionComponent,
    UsersSectionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  exports: [
    CardsCollectionComponent,
    CollectionBarCardComponent,
    LocalUserSectionComponent,
    LoginComponent,
    SettingsComponent,
    SignupComponent,
 
    UsersSectionComponent,
  ]
})
export class FeaturesModule { }
