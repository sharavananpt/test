import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DataObject } from './DataObject';

@Injectable()
export class DataService {

  constructor(private http : HttpClient) { }

  loadButtonText() : Observable<DataObject[]> {
    const jsonUrl = `./assets/data.json`;
    return this.http.get<DataObject[]>(jsonUrl);
  }
}
