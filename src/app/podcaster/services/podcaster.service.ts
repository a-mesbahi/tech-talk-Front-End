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

}
