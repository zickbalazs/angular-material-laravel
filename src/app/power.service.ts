import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Power } from './power';

@Injectable({
  providedIn: 'root'
})
export class PowerService {

  constructor(private http:HttpClient) { }

  GetAll():Observable<Power[]>{
    return this.http.get('http://localhost:8000/consumptions') as Observable<Power[]>;
  }
  Get(id:number):Observable<Power>{
    return this.http.get(`http://localhost:800/api/consumption/${id}`) as Observable<Power>;
  }
  Post(data:{
    day:string,
    production:number,
    powerunit:string
  }):Observable<any>{
    return this.http.post(`http://localhost:8000/api/new-consumption`, data);
  }
  Put(data:Power){
    return this.http.put('http://localhost:8000/api/mod-consumption', data);
  }
  Delete(id:number){
    return this.http.delete('http://localhost:8000/api/delete-consumption/'+id);
  }
}
