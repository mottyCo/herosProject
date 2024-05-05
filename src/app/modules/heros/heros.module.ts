import { NgModule, model} from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class HerosModule { 
  name = model.required<string>
  quote = model.required<string>
  image = model.required<string>

}

