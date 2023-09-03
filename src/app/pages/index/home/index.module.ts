import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardAboutComponent } from './card-about/card-about.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { PhotoAboutComponent } from './photo-about/photo-about.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardAboutComponent,
    CardDetailComponent,
    PhotoAboutComponent,
  ],
  exports: [HomeComponent],
  imports: [CommonModule],
})
export class IndexModule {}
