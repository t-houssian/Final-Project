import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Subject } from 'rxjs';
import { Nba } from './nbas.model';

@Injectable({
  providedIn: 'root',
})
export class NbaService {
  nbas: Nba[] = [];
  nbaSelectedEvent: EventEmitter<Nba> = new EventEmitter<Nba>();
  nbaChangedEvent: EventEmitter<Nba[]> = new EventEmitter<Nba[]>();
  nbaListChangedEvent: Subject<Nba[]> = new Subject<Nba[]>();
  maxNbaId: number;

  constructor(private http: HttpClient) {
    this.getNbas();
  }

  getNbas(): void {
    this
    .http
    .get<{message: string, nbas: Nba[]}>('http://localhost:3000/nbas')
    .subscribe((response: any) => {
      this.nbas = response.nbas;
      console.log(this.nbas)

      this.nbaListChangedEvent.next(this.nbas.slice());
    }, (err: any) => {
      console.error(err);
    });
  }

  getNba(FULL_NAME: string): Nba {
    if (!this.nbas) {
      return null;
    }

    for (let nba of this.nbas) {
      // console.log(FULL_NAME)
      // console.log(nba.FULL_NAME)
      if (nba.FULL_NAME == FULL_NAME) {
        return nba;
      }
    }

    return null;
  }

  deleteNba(nba: Nba): void {
    if (!nba) {
      return;
    }

    const index = this.nbas.indexOf(nba);
    if (index < 0) {
      return;
    }

    this.http.delete<{message: String}>(`http://localhost:3000/nbas/${nba.FULL_NAME}`)
    .subscribe((response: any) => {
      this.getNbas();
    })
  }

  addNba(nba: Nba) {
    if (!nba) {
      return;
    }
  
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
  
    // add to database
    this.http.post<{ message: string, nba: Nba }>('http://localhost:3000/nbas',
      nba,
      { headers: headers })
      .subscribe(
        (responseData) => {
          // add new nba to nbas
          this.nbas.push(responseData.nba);
          this.nbaListChangedEvent.next(this.nbas.slice());
        }
      );
  }

  
  updateNba(originalNba: Nba, newNba: Nba): void {
    if (!originalNba || !newNba) {
      return;
    }

    let index = this.nbas.indexOf(originalNba);
    if (index < 0) {
      return;
    }
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const strNba = JSON.stringify(newNba);

    this.http
    .put<{message: string}>(`http://localhost:3000/nbas/${originalNba.FULL_NAME}`, strNba, {headers: headers})
    .subscribe((response: any) => {
      this.getNbas();
    });
  }

  storeNbas(nbas: Nba[]): any {
    let nbasJSON = JSON.stringify(nbas);
    const httpHeader = new HttpHeaders().set('content-type', 'application/json');

    this.http
      .put<Nba[]>(
        'http://localhost:3000/nbas',
        nbasJSON,
        { headers: httpHeader})
      .subscribe(() => {
        let nbasClone = [...this.nbas];
        this.nbaListChangedEvent.next(nbasClone);
      }, (error: any) => {
        console.log(error);
      }
    );
  }
}