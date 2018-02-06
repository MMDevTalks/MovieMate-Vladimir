import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MovieService } from '@movies/shared';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [MovieService],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
