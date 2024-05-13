import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsCollectionComponent } from './features/users/components/cards-collection/cards-collection.component';
import { UserSectionComponent } from './features/users/components/user-section/user-section.component';
import { SettingsComponent } from './features/users/components/settings/settings.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { UsersSectionComponent } from './features/users/components/users-section/users-section.component';
import { LoginComponent } from './features/users/components/login/login.component';
import { SignupComponent } from './features/users/components/signup/signup.component';
import { LocalUserSectionComponent } from './features/users/components/local-user-section/local-user-section.component';
import { loginGuardGuard } from './guards/login-guard.guard';
import { userSectionGuard } from './guards/user-section.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
  {path: 'heros-collection', component: CardsCollectionComponent},
  {path: 'user', component: UserSectionComponent, children: [
    {path: 'login', component: LoginComponent, canActivate: [userSectionGuard]},
    {path: 'signup', component: SignupComponent,canActivate: [userSectionGuard]},
    {path: 'localUser', component: LocalUserSectionComponent, canActivate: [loginGuardGuard]},
    {path: '', redirectTo: 'localUser', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
  ]},
  {path: 'users', component: UsersSectionComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '', redirectTo: 'heros-collection', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
