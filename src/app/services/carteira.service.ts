import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarteiraService {
  endpoint = 'investments';
  constructor(private apiService: ApiService) {}

  public criarInvestimento(model: any): Observable<any> {
    return this.apiService.post<any>(this.endpoint, model);
  }

  public buscarInvestimentos(): Observable<any> {
    return this.apiService.get<any>(this.endpoint);
  }

  public excluirInvestimento(id: string): Observable<any> {
    return this.apiService.delete<any>(`${this.endpoint}/${id}`);
  }
}
