import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }      

  getContacts():Observable<any>{
    return this.http.get('http://localhost:4500/contacts');
  }
  
  getServices():Observable<any>{
    return this.http.get('http://localhost:4500/services');
  }

  getDetails(id:string):Observable<any>{
    return this.http.get(`http://localhost:4500/details?id=${id}`);
  }
  
  addEnquiry(data:any):Observable<any>{
    return this.http.post('http://localhost:4500/enquiries',data);
  }

  getEnquiries():Observable<any>{
    return this.http.get('http://localhost:4500/enquiries');
  }
  getProjects(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:4500/projects');
  }
  addEnquiryReply(data:any):Observable<any>{
    return this.http.post('http://localhost:4500/enquiryresponses', data);
  }
  addMovie(data: any): Observable<any> {
    return this.http.post('http://localhost:4500/movies', data);
  }
  
  getMovies():Observable<any>{
    return this.http.get('http://localhost:4500/movies');
  }
  
}
