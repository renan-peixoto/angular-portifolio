import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
})
export class CardDetailComponent {
  @Input()
  description: string = '';
  @Input()
  linkResume: string = '';
  @Input()
  photo: Photo;

  constructor() {
    this.photo = {
      src: '',
      alt: '',
    };
  }
}

interface Photo {
  src: string;
  alt: string;
}
