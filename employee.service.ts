import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseurl = 'http://localhost:5000/api/employee';


  constructor(private http: HttpClient) { }

  getReviews(): Observable<any> {
    return this.http.get(`${this.baseurl}/reviews`);
  }
  submitFeedback(data: any, feedback: any) {
    return this.http.post(`${this.baseurl}/feedback`, data);
  }
}
