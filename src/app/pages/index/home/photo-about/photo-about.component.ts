import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-about',
  templateUrl: './photo-about.component.html',
  styleUrls: ['./photo-about.component.css'],
})
export class PhotoAboutComponent {
  @Input() photoProfile: string = '';
  @Input() nameProfile: string | undefined;

  constructor() {}
}
