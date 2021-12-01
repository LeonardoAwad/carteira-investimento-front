import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  endpoint = 'login';
  constructor(private apiService: ApiService) {}

  public login(model: any): Observable<any> {
    return this.apiService.post<any>(this.endpoint, model);
  }
}
