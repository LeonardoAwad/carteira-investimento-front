import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string, params?: HttpParams): Observable<T> {
    const headers = this.AuthorizationHeader();
    const getRequest = this.httpClient.get<T>(`${environment.apiUrl}/${url}`, {
      headers,
      params,
    });

    return getRequest;
  }

  post<T>(url: string, value?: any, params?: HttpParams): Observable<T> {
    const headers = this.AuthorizationHeader();
    const postRequest = this.httpClient.post<T>(
      `${environment.apiUrl}/${url}`,
      value,
      url == "login" ? { params } : { headers, params }
    );

    return postRequest;
  }

  put<T>(url: string, value?: any, params?: HttpParams): Observable<T> {
    const headers = this.AuthorizationHeader();
    const putRequest = this.httpClient.put<T>(
      `${environment.apiUrl}/${url}`,
      value,
      { headers, params }
    );

    return putRequest;
  }

  delete<T>(url: string, params?: HttpParams): Observable<T> {
    const headers = this.AuthorizationHeader();
    const deleteRequest = this.httpClient.delete<T>(
      `${environment.apiUrl}/${url}`,
      { headers, params }
    );

    return deleteRequest;
  }

  AuthorizationHeader(): HttpHeaders {
    const storageAuth = localStorage.getItem("carteira-auth");
    const auth = storageAuth ? JSON.parse(storageAuth) : null;

    return new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth?.token}`,
      UserId: `${auth?.userId}`,
    });
  }
}
