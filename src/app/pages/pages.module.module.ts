import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { uruguayComponent } from './uruguay/uruguay.component';
import { ChileComponent } from './chile/chile.component';



@NgModule({
  declarations: [HomeComponent
    ,uruguayComponent, ChileComponent ],
  imports: [
    CommonModule
  ],
  exports:[ HomeComponent
    ,uruguayComponent , ChileComponent]
})
export class PagesModuleModule { }
