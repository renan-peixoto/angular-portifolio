import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-about',
  templateUrl: './card-about.component.html',
  styleUrls: ['./card-about.component.css'],
})
export class CardAboutComponent {
  name: string = 'Renan Peixoto';
  aboutMe = {
    span: 'Sobre',
    title: 'Conheça um pouco sobre mim',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum velit eligendi dignissimos nulla quos fuga perferendis corporis sed, soluta corrupti labore asperiores placeat consectetur sint veniam maiores dolore minima totam!',
  };
}
