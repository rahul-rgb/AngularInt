import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'  
})
export class DataService {

  constructor(private http: HttpClient) { }
  post(data){
    this.http.post<any>(data, "assets/data.json")
  }
}
