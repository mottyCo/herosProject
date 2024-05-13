import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { UserSectionComponent } from './features/users/components/user-section/user-section.component';


@NgModule({
  declarations: [
    AppComponent,   
  
  ],
  imports: [
    BrowserModule,
   AppRoutingModule,
    FormsModule,
    CoreModule,
    FeaturesModule,
    SharedModule,
    ReactiveFormsModule,
  ], 
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
