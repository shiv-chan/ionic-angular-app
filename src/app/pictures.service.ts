import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from '../environments/environment';
import moment from 'moment';
import { Picture } from './picture';

@Injectable({
  providedIn: 'root',
})
export class PicturesService {
  constructor(private http: HttpClient) {}

  private startDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
  private endDate = moment().format('YYYY-MM-DD');
  // eslint-disable-next-line max-len
  private picturesUrl = `https://api.nasa.gov/planetary/apod?api_key=${environment.apiKey}`;

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occured:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError('Something bad happened...please try again later.');
  }

  // get all picture of 30 days prior today
  getImages(): Observable<Picture[]> {
    const url = `${this.picturesUrl}&start_date=${this.startDate}&end_date=${this.endDate}`;
    return this.http.get<Picture[]>(url).pipe(catchError(this.handleError));
  }

  // get a picture of the day
  getImage(date: string): Observable<Picture> {
    const url = `${this.picturesUrl}&date=${date}`;
    return this.http.get<Picture>(url).pipe(catchError(this.handleError));
  }
}
