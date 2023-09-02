import { Component } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
})
export class CardDetailComponent {
  description: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum velit eligendi dignissimos nulla quos fuga perferendis corporis sed, soluta corrupti labore asperiores placeat consectetur sint veniam maiores dolore minima totam!';
  linkResume: string =
    'https://drive.google.com/file/d/1xxeWdcwgh3ElBXFK5stnb70pPYNj-LIf/view?usp=sharing';
  photo: string = '../../../assets/card-detail img.png';
  photoDescription: string = 'A man in front of a computer';
}
