import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseurl = 'http://localhost:5000/api/admin';


  constructor(private http: HttpClient) { }

  addEmployee(employee: any) {
    return this.http.post(`${this.baseurl}/employees`, employee);
  }
  getEmployees() {
    return this.http.get(`${this.baseurl}/employees`);
  }
  assignReview(employeeId: string, reviewerId: string): Observable<any> {
    return this.http.post(`${this.baseurl}/assign-review`, { employeeId, reviewerId });
  }
  

}
