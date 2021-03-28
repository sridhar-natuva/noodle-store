import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoodlesService {

  constructor(private http: HttpClient) { }

  getAllNoodleStores() {
    return this.http.get(`https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json`);
  }
}
