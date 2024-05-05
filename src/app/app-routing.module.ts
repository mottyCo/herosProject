import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsCollectionComponent } from './components/cards-collection/cards-collection.component';
import { UserSectionComponent } from './components/user-section/user-section.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UsersSectionComponent } from './components/users-section/users-section.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
  {path: 'heros-collection', component: CardsCollectionComponent},
  {path: 'user', component: UserSectionComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: '**', component: LoginComponent}
  ]},
  {path: 'users', component: UsersSectionComponent, pathMatch: 'full'},
  {path: 'settings', component: SettingsComponent},
  {path: '', redirectTo: 'heros-collection', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
