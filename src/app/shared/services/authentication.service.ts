import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  api = environment.api;

  constructor(private http: HttpClient) { }

  register(data: any) {
    return this.http.post(this.api+'signup', data);
  }

  login(data: any) {
    return this.http.post(this.api+'login', data);
  }

  /*sendPasswordResetLink(data: any) {
  	return this.http.post(this.api+'sendPasswordResetLink', data);
  }

  
  changePassword(data: any) {
  	return this.http.post(this.api+'resetPassword', data);
  }

  sendRegisterLink(data: any) {
    return this.http.post(this.api+'sendRegisterLink', data);
  }*/

}
