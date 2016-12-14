import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class CandidatService {

  constructor(private http: Http) { }

  getAllCandidat() {
    return this.http.get('http://localhost:3000/candidats');
  }
}
