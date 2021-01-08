import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudent } from './IStudent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl:string  = 'http://localhost:3000/students';
  constructor(private httpclient : HttpClient) { }

  getAllStudents() : Observable<IStudent[]> { //async
    return this.httpclient.get<IStudent[]>(this.baseUrl);
  }

  saveDetails(student:any) : Observable<IStudent> {
    return this.httpclient.post<any>(this.baseUrl,student);
  }
}
