import { Component, Input } from '@angular/core';

@Component({
  selector: 'skill-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.css'],
})
export class SkillsCardComponent {
  @Input()
  tecnology: string = '';
  @Input()
  tecnologyImage: TecnologyImage;
  @Input()
  progressBar: ProgressBar;

  constructor() {
    this.tecnologyImage = {
      src: '',
      alt: '',
      // width: '',
    };
    this.progressBar = {
      value: '',
      max: '',
    };
  }
}

type TecnologyImage = {
  src: string;
  alt: string;
  // width: string;
};

type ProgressBar = {
  value: string;
  max: string;
};
