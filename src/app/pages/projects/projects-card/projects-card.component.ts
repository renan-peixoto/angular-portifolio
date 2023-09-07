import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.css'],
})
export class ProjectsCardComponent implements OnInit {
  hideOriginal: boolean = true;

  @Input()
  tags: string[] = ['javascript', 'html', 'css'];

  @Input()
  project: string = '';

  @Input()
  description: string = '';

  @Input()
  photo: Photo = {
    src: '',
    alt: '',
    width: '',
    height: '',
  };

  @Input()
  link: string = '';

  constructor() {}

  ngOnInit(): void {}

  showOriginalDiv() {
    this.hideOriginal = true;
  }

  hideOriginalDiv() {
    this.hideOriginal = false;
  }
}

type Photo = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
};
