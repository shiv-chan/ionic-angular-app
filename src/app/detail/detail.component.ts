import { Component, OnInit, Input } from '@angular/core';
import { Picture } from '../picture';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PicturesService } from '../pictures.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() picture?: Picture;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private pictureService: PicturesService
  ) {}

  ngOnInit(): void {
    this.getPicture();
  }

  getPicture() {
    const date = this.route.snapshot.paramMap.get('date');
    this.pictureService
      .getImage(date)
      .subscribe((picture) => (this.picture = picture));
  }

  goBack(): void {
    this.location.back();
  }
}
