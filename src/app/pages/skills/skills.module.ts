import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { SkillsCardComponent } from './skills-card/skills-card.component';

@NgModule({
  declarations: [SkillsComponent, SkillsCardComponent],
  exports: [SkillsComponent],
  imports: [CommonModule],
})
export class SkillsModule {}
