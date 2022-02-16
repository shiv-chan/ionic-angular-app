import { Component, OnInit } from '@angular/core';
import { Pictures } from '../pictures';
import { PicturesService } from '../pictures.service';

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.scss'],
})
export class MasterListComponent implements OnInit {
  pictures: Pictures[] = [];
  errorMessage: string;

  constructor(private pictureService: PicturesService) {}

  ngOnInit() {
    this.getPictures();
  }

  getPictures(): void {
    this.pictureService.getImages().subscribe(
      (pictures) => {
        this.pictures = pictures;
        console.log(pictures);
      },
      (err) => (this.errorMessage = err)
    );
  }
}
