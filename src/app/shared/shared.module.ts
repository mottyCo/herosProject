import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { ModalErrorComponent } from './components/modal-error/modal-error.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';





@NgModule({
  declarations: [
    HeroCardComponent,
    ModalErrorComponent,
    PageNotFoundComponent,

  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeroCardComponent,
    ModalErrorComponent,
    PageNotFoundComponent,
  ]
})
export class SharedModule { }
