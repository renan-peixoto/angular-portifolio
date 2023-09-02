import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-about',
  templateUrl: './photo-about.component.html',
  styleUrls: ['./photo-about.component.css'],
})
export class PhotoAboutComponent {
  photoProfile: string = 'https://github.com/renan-peixoto.png';
  @Input() nameProfile: string | undefined;
  contatPage: string = '#';

  constructor() {}
}
