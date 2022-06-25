import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { 

  }
  ppcData(uuid:any){

let url=`http://localhost:3000/ppc/${uuid}`;
return this.http.get(url);

}

}