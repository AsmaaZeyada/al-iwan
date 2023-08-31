import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private _HttpClient: HttpClient) {}


  getProjects(): Observable<any> {
    return this._HttpClient.get<any>(`https://api.ecmpp.com/app/office/1/protifilo`);
  }


}
