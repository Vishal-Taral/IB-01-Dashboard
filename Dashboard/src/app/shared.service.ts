import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { 

  }
  ppcData(){
let url="http://localhost:3000/logic_building";
return this.http.get(url);

}

}