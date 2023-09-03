import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-about',
  templateUrl: './card-about.component.html',
  styleUrls: ['./card-about.component.css'],
})
export class CardAboutComponent {
  @Input()
  name: string = '';

  @Input()
  aboutMe: AboutMe;

  constructor() {
    this.aboutMe = {
      span: '',
      title: '',
      text: '',
    };
  }
}

interface AboutMe {
  span: string;
  title: string;
  text: string;
}
