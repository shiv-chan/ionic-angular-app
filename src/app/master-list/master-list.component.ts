import { Component, OnInit } from '@angular/core';
import { Picture } from '../picture';
import { PicturesService } from '../pictures.service';

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.scss'],
})
export class MasterListComponent implements OnInit {
  pictures: Picture[] = [];
  errorMessage: string;

  constructor(private pictureService: PicturesService) {}

  ngOnInit() {
    this.getPictures();
  }

  getPictures(): void {
    this.pictureService.getImages().subscribe(
      (pictures) => {
        pictures.sort((a, b) => {
          if (b.date - a.date) {
            return 1;
          } else {
            return -1;
          }
        });
        this.pictures = pictures;
        console.log(pictures);
      },
      (err) => (this.errorMessage = err)
    );
  }
}
