import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsCardComponent } from './projects-card/projects-card.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectsCardComponent],
  exports: [ProjectsComponent],
  imports: [CommonModule],
})
export class ProjectsModule {}
