import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ImportacaoInterface } from '../interfaces/transaction.interface';


@Injectable({
  providedIn: 'root'
})
export class ImportService {

  constructor(public http: HttpClient) { }

  enviarImportacaoXlsx(file: any): Observable<any> {
    return this.http.post(`${environment.api_url}/importacao`, file, { responseType: 'text' });
  }

  getImportacoes(): Observable<ImportacaoInterface[]> {
    return this.http.get<ImportacaoInterface[]>(`${environment.api_url}/importacao`);
  }

  getImportacao(id: number): Observable<ImportacaoInterface> {
    return this.http.get<ImportacaoInterface>(`${environment.api_url}/importacao/${id}`);
  }
}
