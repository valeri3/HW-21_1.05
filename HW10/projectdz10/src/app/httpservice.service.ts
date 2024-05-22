import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient) { }

  getAllAlbums(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/albums");
  }
}
