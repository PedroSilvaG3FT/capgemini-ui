import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { TransactionInterface } from '../interfaces/transaction.interface';


@Injectable({
  providedIn: 'root'
})
export class ImportService {

  constructor(public http: HttpClient) { }

  enviarImportacaoXlsx(file: any): Observable<any> {
    return this.http.post(`${environment.api_url}receivefile`, file, { responseType: 'text' })
      .pipe(tap(), catchError(this.handleError<any>('base service add')));
  }

  getImportacoes(): Observable<TransactionInterface[]> {
    return this.http.get<TransactionInterface[]>(`${environment.api_url}receivefile`);
  }

  getImportacao(id: number): Observable<TransactionInterface> {
    return this.http.get<TransactionInterface>(`${environment.api_url}receivefile/${id}`);
  }

  protected log(message: string): void {
    message = message;
  }

  protected handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
