import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostFootballer } from '../add-footballer/add-footballer.component';


export class Footballer {

  footballerID: string
  firstName: string
  lastName: string
  imgPath: string


  constructor(

    footballerID: string,
    firstName: string,
    lastName: string,
    imgPath: string

  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  url = 'http://localhost:5000/footballer/';

  constructor(
    private http: HttpClient) {
   
  }
  getAllFootballers(): Observable<Footballer[]> {

    var val = this.http.get<Footballer[]>(this.url +'all');
    return val;

  }

  getFootballerById(footballerId: string): Observable<Footballer> {

    var path = this.url  + footballerId;
    var val = this.http.get<Footballer>(path);
    return val;

  }

  updateFootballerById(footballer: Footballer) {

    var val = this.http.put<Footballer>(this.url, footballer);
    return val;

  }

  addFootballer(footballer: PostFootballer) {

    var val = this.http.post<Footballer>(this.url, footballer);
    return val;

  }


  deleteById(footballerId: string) {

    var path = this.url+'delete/' + footballerId;

    var val = this.http.delete<Footballer>(path);
    return val;

  }


}
