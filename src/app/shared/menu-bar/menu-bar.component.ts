import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent {
  nameLogo: string = 'Renan Peixoto';
  about: string = 'Sobre';
  skills: string = 'Skills';
  projects: string = 'Projetos';
  contact: string = 'Contato';
}
