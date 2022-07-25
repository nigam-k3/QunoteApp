import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public isLoad = false;

  constructor(private http: HttpClient) { }

  saveSignup(data: any) {
    return this.http.post('https://62cbfd978042b16aa7c69ddf.mockapi.io/Signup', data);
  }

  savelogin(data: any) {
    return this.http.get('https://62cbfd978042b16aa7c69ddf.mockapi.io/Signup', data);
  }

  getProfile(data: any) {
    console.log("inside ser", data);
    return this.http.get(`https://62cbfd978042b16aa7c69ddf.mockapi.io/Signup/${data}`);
  }


  saveTask(data: any) {
    return this.http.post('https://62cbfd978042b16aa7c69ddf.mockapi.io/AddTask', data);
  }

  getTask(data: any) {
    return this.http.get(data);
  }

  getDetails(data: any) {
    return this.http.get(`https://62cbfd978042b16aa7c69ddf.mockapi.io/AddTask/${data}`);
  }

  deleteDetails(data: any) {
    return this.http.delete(`https://62cbfd978042b16aa7c69ddf.mockapi.io/AddTask/${data}`);
  }

}
