import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexModule } from './pages/index/home/index.module';
import { SkillsModule } from './pages/skills/skills.module';
import { ProjectsModule } from './pages/projects/projects.module';
import { MenuBarComponent } from './shared/menu-bar/menu-bar.component';
import { FooterBarComponent } from './shared/footer-bar/footer-bar.component';

@NgModule({
  declarations: [AppComponent, MenuBarComponent, FooterBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    SkillsModule,
    ProjectsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
