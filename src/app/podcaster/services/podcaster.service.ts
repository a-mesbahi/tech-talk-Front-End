import { Podcaster } from './../model/Podcaster.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PodcasterService {
  private PODCASTER_ENDPOINT = "users-service/podcaster";
  constructor(private httpClient:HttpClient) { }

  getPodcastersSearched(name:string):Observable<Podcaster[]>{
    return this.httpClient.get<Podcaster[]>(`${this.PODCASTER_ENDPOINT}?name=${name}`)
  }

  getAllpodcaster(page:number,size:number):Observable<Podcaster[]>{
      return this.httpClient.get<Podcaster[]>(`${this.PODCASTER_ENDPOINT}s?page=${page}&size=${size}`)
  }

  getPodcastersWithVerified(page:number,size:number,verified:number):Observable<Podcaster[]>{
    return this.httpClient.get<Podcaster[]>(`${this.PODCASTER_ENDPOINT}s?page=${page}&size=${size}&verified=${verified}`)
  }


  updateVerefied(newVerified:number, ids:number[]){
    return this.httpClient.put(`${this.PODCASTER_ENDPOINT}s`,{
      "newVerified": newVerified,"ids": ids})
  }

}
